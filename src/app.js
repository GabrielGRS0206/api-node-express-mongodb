import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Error connection'))
db.once("open", () => {
  console.log('Connection ok')
})

const app = express();
app.use(express.json())
routes(app);

export default app