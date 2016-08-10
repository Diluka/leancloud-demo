/**
 * Created by Diluka on 2016-08-10.
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


describe("服务器启动测试", () => {
    "use strict";

    const expect = require("chai").expect;
    const supertest = require("supertest");
    const request = supertest.agent(`http://localhost:${process.env.LEANCLOUD_APP_PORT}`);
    const AV = require("leanengine");

    const ApplicationConfig = require("../lib/application.config").ApplicationConfig;

    let config;

    it("配置服务器", () => {
        config = new ApplicationConfig();
        config.test = `test ok ${new Date()}`;
    });


    it("启动服务器", (done) => {
        const app = require("../index").app;

        AV.init({
            appId: process.env.LEANCLOUD_APP_ID,
            appKey: process.env.LEANCLOUD_APP_KEY,
            masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
        });

        // 如果不希望使用 masterKey 权限，可以将下面一行删除
        AV.Cloud.useMasterKey();

        app.listen(process.env.LEANCLOUD_APP_PORT, done);
    });

    it("服务器响应测试", (done) => {
        request.get("/test/test").expect(200).end((e, res) => {
            expect(res.body, "测试响应字符串").equals(config.test);

            done();
        });
    });

    it("测试异常抛出", (done)=> {
        request.get("/test/error").expect(500, done);
    });
});
