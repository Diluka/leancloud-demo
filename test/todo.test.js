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
"use strict";
describe("Todo测试", ()=> {
    const expect = require("chai").expect;
    const supertest = require("supertest");
    const request = supertest.agent(`http://localhost:${process.env.LEANCLOUD_APP_PORT}`);

    it("写入对象", (done)=> {
        request.post("/todos").send({"content": `测试数据 - ${new Date()}`}).expect(200).end((e, res)=> {
            expect(res.body).to.be.an("object", "返回对象");
            done();
        });
    });

    it("读取列表", (done)=> {
        request.get("/todos").expect(200).end((e, res)=> {
            expect(res.body).instanceOf(Array, "返回值应该是数组");

            done();
        });
    });
});
