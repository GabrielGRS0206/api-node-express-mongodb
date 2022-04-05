import clients from "../models/Client.js";

class ClientController {

  static findAll = (req, res) => {
    clients.find((err, client) => {
      res.status(200).json(client)
    })
  }

  static findById = (req, res) => {
    const id = req.params.id;

    clients.findById(id, (err, client) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id client not found.`})
      } else {
        res.status(200).send(client);
      }
    })
  }
}

export default ClientController