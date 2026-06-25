"use client";

import { useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type ContactMapProps = {
  latitude: number;
  longitude: number;
  zoom: number;
  markerLabel: string;
};

export default function ContactMap({
  latitude,
  longitude,
  zoom,
  markerLabel,
}: ContactMapProps) {
  const markerIcon = useMemo(
    () =>
      L.divIcon({
        className: "deacon-contact-map-marker",
        html: '<span class="deacon-contact-map-marker__pin"></span>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      }),
    [],
  );

  return (
    <div className="deacon-contact-map relative z-0 isolate h-[220px] overflow-hidden sm:h-[240px] md:h-[270px]" role="region" aria-label="Peta lokasi kantor Deacon Pro">
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        minZoom={12}
        maxZoom={18}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={markerIcon}>
          <Popup>{markerLabel}</Popup>
        </Marker>
      </MapContainer>
      <style jsx global>{`
        .deacon-contact-map {
          contain: paint;
          overflow: hidden;
        }

        .deacon-contact-map .leaflet-container {
          background: #f6f4ef;
          font-family: var(--font-sans), Arial, sans-serif;
          overflow: hidden;
        }

        .deacon-contact-map .leaflet-pane {
          z-index: 1 !important;
        }

        .deacon-contact-map .leaflet-tile-pane {
          z-index: 1 !important;
        }

        /* Keep OSM tiles close to a clean default map while gently matching the premium contact frame. */
        .deacon-contact-map .leaflet-tile {
          filter: brightness(1.04) contrast(1.03) saturate(0.96);
        }

        .deacon-contact-map .leaflet-overlay-pane,
        .deacon-contact-map .leaflet-shadow-pane {
          z-index: 2 !important;
        }

        .deacon-contact-map .leaflet-marker-pane {
          z-index: 6 !important;
        }

        .deacon-contact-map .leaflet-tooltip-pane {
          z-index: 8 !important;
        }

        .deacon-contact-map .leaflet-popup-pane {
          z-index: 10 !important;
        }

        .deacon-contact-map .leaflet-top,
        .deacon-contact-map .leaflet-bottom {
          z-index: 14 !important;
        }

        .deacon-contact-map .leaflet-control {
          z-index: 14 !important;
        }

        .deacon-contact-map .leaflet-control-container {
          position: relative;
          z-index: 14 !important;
        }

        .deacon-contact-map .leaflet-control-zoom a {
          border-color: rgba(255, 255, 255, 0.2);
          background: #111111;
          color: #ffffff;
          font-size: 17px;
        }

        .deacon-contact-map .leaflet-control-zoom,
        .deacon-contact-map .leaflet-bar a:first-child,
        .deacon-contact-map .leaflet-bar a:last-child {
          border-radius: 0;
        }

        .deacon-contact-map .leaflet-control-zoom a:hover {
          background: #b88a2a;
          color: #ffffff;
        }

        .deacon-contact-map .leaflet-popup-content-wrapper,
        .deacon-contact-map .leaflet-popup-tip {
          background: #111111;
          color: #ffffff;
        }

        .deacon-contact-map .leaflet-popup-content {
          margin: 12px 14px;
          font-size: 13px;
          font-weight: 700;
        }

        .deacon-contact-map .leaflet-control-attribution {
          background: rgba(17, 17, 17, 0.75);
          color: rgba(255, 255, 255, 0.65);
          font-size: 10px;
        }

        .deacon-contact-map .leaflet-control-attribution a {
          color: #d6b25e;
        }

        .deacon-contact-map-marker {
          background: transparent;
          border: 0;
        }

        .deacon-contact-map-marker__pin {
          position: relative;
          display: block;
          height: 20px;
          width: 20px;
          transform: rotate(45deg);
          border: 3px solid #ffffff;
          background: #b88a2a;
          box-shadow: 0 6px 16px rgba(7, 7, 7, 0.35);
        }

        .deacon-contact-map-marker__pin::after {
          content: "";
          position: absolute;
          inset: 4px;
          border-radius: 9999px;
          background: #111111;
        }
      `}</style>
    </div>
  );
}
