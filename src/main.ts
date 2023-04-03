import "reflect-metadata";

import app from "./infrastructure/express-app";
import { port } from "./infrastructure/env-vars";

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
