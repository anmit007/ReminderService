const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const { createChannel } = require("./utils/messageQueue");
const jobs = require("./utils/job");
const setupAndStartServer = async () => {
  const app = express();
  const TicketController = require("./controller/ticketController");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const channel = await createChannel();

  app.post("/api/v1/tickets", TicketController.create);
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    jobs();
  });
};

setupAndStartServer();

/* 55 */
