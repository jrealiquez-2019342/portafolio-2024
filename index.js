import { initServer } from './configs/app.js';
import { connect } from './configs/mongo.js';
import { create, createTask } from './src/task/task.controller.js';

initServer();
connect();
createTask();