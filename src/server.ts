import app from "./app";
import { ENV } from "./config/env.config";
import logger from "./utils/logger";

const PORT = Number(ENV.PORT);

app.listen(PORT, () => {
  logger.info(`Express server running on http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
  logger.info("Shutting down server...");
  process.exit(0);
});
