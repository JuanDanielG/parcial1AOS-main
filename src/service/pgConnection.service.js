import pgPromise from "pg-promise";
import { env } from "../config/default.js";

export default class pgConnection {
    static instance;
    Connection;

    constructor(){

        if (pgConnection.instance) {
            return pgConnection.instance
        }

        pgConnection.instance = this;
        const pgp = pgPromise({  })

        this.connection= pgp(env.db_url);
        this.connection.connect()
            .then(obj => {

                console.log('me conecte' + obj.client.serverVersion);
                obj.done();
            })
            .catch(error => {
                console.log('error ' + error.message  || error  )

            })

    }

}