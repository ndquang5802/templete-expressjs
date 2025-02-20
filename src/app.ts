import bodyParser from "body-parser";
import express, { Express } from "express";
import morgan from "morgan";
import routes from "./routes/index.route";
import { httpExceptionFilter } from "./utils/exception";

const app: Express = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("NodeJs!");
});

routes(app);

app.use(httpExceptionFilter);

export default app;
