import * as express from "express";
import {default as index} from "./index.route";
import {default as todo} from "./todo.route";

export const routers: { [key: string]: express.IRouter } = {
    index, todo
};