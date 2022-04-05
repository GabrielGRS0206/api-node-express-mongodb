import mongoose from "mongoose"

mongoose.connect("mongodb+srv://grocha:master0206@cluster0.wqfdt.mongodb.net/mongoDb?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;
