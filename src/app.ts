import * as express from "express";
import * as bodyParser from "body-parser";
import * as AV from "leanengine";
import * as _ from "lodash";

import { routers } from "./router";

export const app: express.Application = express();

app.use(AV["express"]());

app.use(bodyParser.json());

_.each(routers, (router) => {
    app.use(router);
});