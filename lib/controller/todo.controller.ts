/**
 * Created by Diluka on 2016-08-15.
 *
 *
 * ----------- 神 兽 佑 我 -----------
 *        ┏┓      ┏┓+ +
 *       ┏┛┻━━━━━━┛┻┓ + +
 *       ┃          ┃
 *       ┣     ━    ┃ ++ + + +
 *      ████━████   ┃+
 *       ┃          ┃ +
 *       ┃  ┴       ┃
 *       ┃          ┃ + +
 *       ┗━┓      ┏━┛  Code is far away from bug
 *         ┃      ┃       with the animal protecting
 *         ┃      ┃ + + + +
 *         ┃      ┃
 *         ┃      ┃ +
 *         ┃      ┃      +  +
 *         ┃      ┃    +
 *         ┃      ┗━━━┓ + +
 *         ┃          ┣┓
 *         ┃          ┏┛
 *         ┗┓┓┏━━━━┳┓┏┛ + + + +
 *          ┃┫┫    ┃┫┫
 *          ┗┻┛    ┗┻┛+ + + +
 * ----------- 永 无 BUG ------------
 */
import {TodoService} from "../service/todo.service";
import {Inject} from "typedi";
import {JsonController, Get, Post, Body, UseBefore} from "routing-controllers";
import {FieldFilterMiddleware} from "../middleware/field-filter.middleware";

@JsonController("/todos")
export class TodoController {
    @Inject() private todoService: TodoService;

    @Get("/")
    async getAll() {
        return await this.todoService.getAll();
    }

    @Post("/")
    // @UseBefore(FieldFilterMiddleware)
    async saveOne(@Body() data) {
        console.log(data);
        return await this.todoService.save(data);
    }
}
