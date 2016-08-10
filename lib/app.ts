import "reflect-metadata";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";
import * as Express from "express";
import * as AV from "leanengine";


import {importClassesFromDirectories} from "routing-controllers/util/DirectoryExportedClassesLoader";
importClassesFromDirectories([
    __dirname + "/service/**/*.service.js"
]);

import {ApplicationConfig} from "./application.config";

useContainer(Container);

export const app: Express.Application = createExpressServer({
    controllerDirs: [__dirname + "/controller/**/*.controller.js"],
    middlewareDirs: [__dirname + "/middleware/**/*.middleware.js"],
    interceptorDirs: [__dirname + "/interceptor/**/*.interceptor.js"]
});

const config: ApplicationConfig = global["appConfig"] || new ApplicationConfig();

if (!config) {
    console.warn("application.config not provided, using default");
}

Container.set(ApplicationConfig, config);

app.use(AV.express());
