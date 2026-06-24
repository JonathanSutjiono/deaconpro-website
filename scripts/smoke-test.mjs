const baseUrl = (process.env.SMOKE_TEST_URL || "http://127.0.0.1:3000").replace(/\/$/, "");
const routes = [
  "/",
  "/construction",
  "/interior",
  "/services/construction",
  "/portfolio/construction",
  "/portfolio/modern-residence-bsd",
  "/insight",
  "/insight/tips-memilih-kontraktor-rumah-di-jakarta",
  "/studio",
];

const expectedHomeContent = [
  "DESIGN.",
  "Construction",
  "Interior Fit-Out",
  "Consult on WhatsApp",
];

let failed = false;

for (const route of routes) {
  try {
    const response = await fetch(`${baseUrl}${route}`, { redirect: "manual" });
    if (!response.ok) {
      process.stderr.write(`${route} returned ${response.status}\n`);
      failed = true;
      continue;
    }

    if (route === "/") {
      const html = await response.text();
      for (const content of expectedHomeContent) {
        if (!html.includes(content)) {
          process.stderr.write(`Homepage is missing expected content: ${content}\n`);
          failed = true;
        }
      }
      if (!html.includes("wa.me/6281299375577")) {
        process.stderr.write("Homepage is missing the official WhatsApp target.\n");
        failed = true;
      }
    }

    process.stdout.write(`${route} ${response.status}\n`);
  } catch (error) {
    process.stderr.write(`${route} could not be fetched: ${error instanceof Error ? error.message : "unknown error"}\n`);
    failed = true;
  }
}

if (failed) process.exitCode = 1;
