'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');

const app = new App();
app.use(
  new Alexa(),
  new GoogleAssistant(),
  new JovoDebugger(),
);

app.setHandler(
  require('./handlers/mainHandler'),
  require('./handlers/anthemHandler'),
);

module.exports.app = app;
