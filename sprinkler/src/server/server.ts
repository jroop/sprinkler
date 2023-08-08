import express, { Request } from "express";
import cors from "cors";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors<Request>());

/* serve the built frontend */
app.use(express.static(path.join(__dirname, "../../dist/client")));

app.get("/", (_, res) => {
  res.json({
    msg: "it works",
  });
});

app.get("/api", (_, res) => {
  res.json({
    msg: "this is the api",
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("hello from 3000");
});
