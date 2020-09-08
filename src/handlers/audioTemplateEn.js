'use strict';

module.exports = {
  type: 'APLA',
  version: '0.8',
  description: 'This document demonstrates key components used to create audio responses.',
  mainTemplate: {
    parameters: [
      'payload',
    ],
    item: {
      type: 'Mixer',
      description: 'The Mixer component plays a set of audio clips at the same time. See docs for more information.',
      items: [
        {
          type: 'Sequencer',
          description: 'The Sequencer component plays a series of audio clips one after another.',
          items: [
            {
              type: 'Silence',
              duration: 4600,
            },
            {
              type: 'Audio',
              description: 'The Audio component plays the provided audio file, such as an MP3 file. See docs for more information.',
              source: '${payload.anthemAlexaVoice}', // eslint-disable-line no-template-curly-in-string
            },
            {
              type: 'Speech',
              contentType: 'SSML',
              content: '<speak> ${payload.goodbye} </speak>', // eslint-disable-line no-template-curly-in-string
            },
          ],
        },
        {
          type: 'Audio',
          description: 'The Audio component plays the provided audio file, such as an MP3 file. See docs for more information.',
          source: '${payload.anthemOnlyMusic}', // eslint-disable-line no-template-curly-in-string
          filter: [
            {
              type: 'Volume',
              amount: '30%',
            },
          ],
        },
      ],
    },
  },
};
