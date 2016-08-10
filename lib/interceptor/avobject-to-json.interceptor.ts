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
import * as AV from "leanengine";
import * as _ from "lodash";
import {InterceptorInterface, InterceptorGlobal} from "routing-controllers";

@InterceptorGlobal()
export class AVObjectToJSONInterceptor implements InterceptorInterface {
    intercept(request: any, response: any, result: any): any|Promise<any> {
        if (_.isArray(result)) {
            return _.map(result, (o: any)=>o instanceof AV.Object ? mapping(o) : o);
        } else {
            return result instanceof AV.Object ? mapping(result) : result;
        }
    }
}

function mapping(o: AV.Object) {
    return _.extend({objectId: o.id, createdAt: o.createdAt, updatedAt: o.updatedAt}, o.attributes);
}
