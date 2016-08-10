import {Controller, Get} from "routing-controllers";

@Controller()
export class IndexController {

    @Get("/")
    index() {
        return `Server startup successfully! <br>
<a href="/test/hello">hello world</a><br>
<a href="/test/echo?msg=${new Date()}">echo DATE</a><br>
<form action="/todos" method="post">
<input name="content">
<button>OK</button>
</form>`;
    }

    @Get("/time")
    time() {
        return new Date();
    }
}
