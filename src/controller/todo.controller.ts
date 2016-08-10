import {Get, Post, UseInterceptor, Body, JsonController} from "routing-controllers";
import {TodoService} from "../service/todo.service";
import {Inject} from "typedi";
import * as _ from "lodash";
import * as AV from "leanengine";

@JsonController("/todos")
export class TodoController {

    @Inject() private todoService: TodoService;


    @Get("/")
    @UseInterceptor((req, res, content) => {
        if (_.isArray(content)) {
            return _.map(content, (o: AV.Object) => o.toJSON());
        }
        return content;
    })
    getAll() {
        return this.todoService.getAll();
    }

    @Post("/")
    post( @Body() data) {
        return this.todoService.save(data);
    }
}
