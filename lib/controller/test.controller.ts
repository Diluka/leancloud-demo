/**
 * Created by Diluka on 2016-08-10.
 */
import {QueryParam, Get, JsonController} from "routing-controllers";
import {TestService} from "../service/test.service";
import {Inject} from "typedi";

@JsonController("/test")
export class TestController {
    @Inject() private testService: TestService;

    @Get("/hello")
    sayHello() {
        return "Hello World!";
    }

    @Get("/echo")
    echo(@QueryParam("msg") msg: string) {
        return msg;
    }

    @Get("/test")
    showTestString() {
        return this.testService.getTestString();
    }

    @Get("/error")
    error() {
        throw Error("produce an error");
    }
}
