const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
// const cors = req("cors");

const projectRouter = require("./api/projects-router.js");

const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

server.use("./api/projects", projectRouter);

module.exports = server;
