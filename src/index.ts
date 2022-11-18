import express from "express";
import routes from "./routes";
import handleError from "./middlewares/handleError";
import requestLog from "./middlewares/requestLog";
import { SUCCESS } from "./constants/success";
import { ERRORS } from "./constants/errors";
import db  from "./database";

async function main() {
    const app = express();

    app.use(express.json());
    app.use(requestLog);

    app.use(routes);

    app.use(handleError);

    app.listen(3000, () => console.log(SUCCESS.APP.SERVEROK));

    db.authenticate()
        .then(() => {
            console.log(SUCCESS.DATABASE.HASCONECTIONOK);
        })
        .catch(()  => {
            console.log(ERRORS.DATABASE.HASCONECTIONERROR);
        });
}

main().catch((error: any) => {
    console.log("🥵 Erro!");
    console.log(error);
});