const express = require('express');

const messagesController = require('../Controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessage);

module.exports = messagesRouter;
