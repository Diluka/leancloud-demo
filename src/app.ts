import "reflect-metadata";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";
import * as Express from "express";
import * as AV from "leanengine";

// load all services
import "./service";

useContainer(Container);

export const app: Express.Application = createExpressServer({
    controllerDirs: [__dirname + "/controller/*.controller.js"]
});

app.use(AV.express());
