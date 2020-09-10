'use strict';

module.exports = {
  type: 'APL',
  version: '1.4',
  settings: {},
  theme: 'dark',
  import: [
    {
      name: 'alexa-layouts',
      version: '1.0.0',
    },
  ],
  mainTemplate: {
    parameters: [
      'payload',
    ],
    items: [
      {
        type: 'Container',
        height: '100vh',
        width: '100vw',
        items: [
          {
            id: 'speakItemText',
            type: 'Text',
            color: 'white',
            fontSize: '4px',
            display: 'none',
            text: '${payload.data.properties.aplAudioData.url}', // eslint-disable-line no-template-curly-in-string
            speech: '${payload.data.properties.aplAudioData.url}', // eslint-disable-line no-template-curly-in-string
          },
          {
            type: 'Image',
            height: '100vh',
            width: '100vw',
            source: '${payload.data.properties.backgroundUrl}', // eslint-disable-line no-template-curly-in-string
            scale: 'best-fill',
            align: 'center',
          },
        ],
      },
    ],
  },
};
