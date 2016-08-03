import * as express from "express";
import * as AV from "leanengine";

const Todo = AV.Object.extend("Todo");

const router: express.IRouter = express.Router();

router.get("/todos", (req, res) => {
    new AV.Query(Todo).find().then(list => {
        res.send(list);
    });
});

router.post("/todos", (req, res) => {
    new Todo({ content: req.body["content"] }).save().then(o => {
        res.send(o);
    });
});

export default router;