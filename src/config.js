'use strict';

module.exports = {
  intentMap: {
    LaunchIntent: 'LAUNCH',
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
