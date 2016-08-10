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
import * as _ from "lodash";
import {MiddlewareInterface, MiddlewareGlobalBefore} from "routing-controllers";

@MiddlewareGlobalBefore()
export class AuthenticationMiddleware implements MiddlewareInterface {
    use(request: any, response: any, next?: (err?: any) => any): any {
        console.log(request.method, request.url, "param:", request.params, "query:", request.query, "body:", request.body);
        // TODO
        // console.log("AVUser", request.AV.user);
        next();
    }
}
