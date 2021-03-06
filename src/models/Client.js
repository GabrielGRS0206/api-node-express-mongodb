import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    _id: {type: String},
    name: {type: String, required: true},
    email: {type: String}
  },
  {
    versionKey: false
  }
)

const clients = mongoose.model("clients", clientSchema)

export default clients;