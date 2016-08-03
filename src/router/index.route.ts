import * as express from "express";
import * as AV from "leanengine";

const router: express.IRouter = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

export default router;