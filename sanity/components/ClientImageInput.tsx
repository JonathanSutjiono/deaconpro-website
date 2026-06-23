import { Button, Card, Flex, Stack, Text } from "@sanity/ui";
import type { ImageValue } from "@sanity/types";
import { unset, type ObjectInputProps } from "sanity";

/**
 * Keeps image removal understandable for non-technical editors. `unset()` only
 * removes the image reference from this document; it never deletes the asset
 * from Sanity's shared media library.
 */
export function ClientImageInput(props: ObjectInputProps<ImageValue>) {
  const hasImage = Boolean(props.value?.asset);

  return (
    <Stack space={3}>
      {hasImage ? (
        <Card padding={3} radius={2} tone="transparent" border>
          <Flex align="center" justify="space-between" gap={3} wrap="wrap">
            <Text size={1} weight="medium">
              Gambar yang sedang digunakan
            </Text>
            <Button
              fontSize={1}
              mode="ghost"
              padding={2}
              text="Hapus gambar dari konten ini"
              tone="critical"
              type="button"
              onClick={() => props.onChange(unset())}
            />
          </Flex>
        </Card>
      ) : null}
      {props.renderDefault(props)}
    </Stack>
  );
}
