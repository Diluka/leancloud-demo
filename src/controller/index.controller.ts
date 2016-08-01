import {Controller, Param, QueryParam, Body, Get, Post, Put, Delete} from "routing-controllers";

@Controller()
export class IndexController {

    @Get("/")
    sayHello() {
        return "Hello World!";
    }

    @Get("/echo")
    echo( @QueryParam("msg") msg: string) {
        return msg;
    }
}
