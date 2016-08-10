import * as AV from "leanengine";
import {Service} from "typedi";
import {Todo} from "../entity";


@Service()
export class TodoService {
    async getAll() {
        return await new AV.Query(Todo).find<AV.Object[]>();
    }

    save(data) {
        return new Todo(data).save<AV.Object>();
    }
}
