import dotenv from 'dotenv';
dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT;

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mynodeweb.swp9bng.mongodb.net/library-management`

 export const config = {
    mongo:{
        url:MONGO_URL
    },
    server:{
        port:SERVER_PORT
    }

}

// export default config;
