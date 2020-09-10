'use strict';

module.exports = {
  intentMap: {
    LaunchIntent: 'LAUNCH',
    'AMAZON.YesIntent': 'YesIntent',
    'AMAZON.NoIntent': 'NoIntent',
    'AMAZON.StartOverIntent': 'StartOverIntent',
    'AMAZON.RepeatIntent': 'RepeatIntent',
    'AMAZON.ResumeIntent': 'ResumeIntent',
    'AMAZON.HelpIntent': 'HelpIntent',
    'AMAZON.StopIntent': 'StopIntent',
    'AMAZON.CancelIntent': 'CancelIntent',
    'AMAZON.FallbackIntent': 'FallbackIntent',
    DefaultFallbackIntent: 'FallbackIntent',
  },

  logging: true,

  user: {
    metaData: {
      enabled: true,
    },
  },
};
