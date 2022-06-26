import { NextFunction, Request, Response } from "express";
import db from "../db";

const DummyController = {
    dummyFunc: async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(
                await db.dummy.service.dummyFunc(),
            );
        } catch (e) {
            next(e);
        }
    },
};

export default DummyController;

