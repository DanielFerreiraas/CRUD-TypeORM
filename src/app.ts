import "reflect-metadata";

import "./config/env/dotenv";
import "./config/database/typeorm";
// import "./config/container/tsyringe";

import express from "express";

const app = express();

app.use(express.json());

export default app;