'use strict';

const anthem = require('./anthem');
const audioTemplateEs = require('../aplTemplates/audioTemplateEs');
const audioTemplateEn = require('../aplTemplates/audioTemplateEn');
const flagTemplate = require('../aplTemplates/flagTemplate');

const handler = {
  PrivateSingAnthem() {
    const locale = this.getLocale().toLowerCase();

    if (!this.hasScreenInterface()) {
      const upperLocal = locale.split('-')[0].toUpperCase();
      const audioUrl = process.env[`ANTHEM_MUSIC_AND_ALEXA_VOICE_${upperLocal}_URL`];

      const speech = this.t('AnthemNoScreen', { audioUrl });

      return this.tell(speech);
    }

    let message;
    let template = audioTemplateEn;

    if (locale === 'es-es') {
      message = anthem.join(' ');
      template = audioTemplateEs;
    }

    if (this.isAlexaSkill()) {
      const audioDirective = {
        type: 'Alexa.Presentation.APLA.RenderDocument',
        token: 'audioToken',
        document: template,
        datasources: {
          anthemOnlyMusic: process.env.ANTHEM_ONLY_MUSIC_URL,
          anthemAlexaVoice: process.env.ANTHEM_ONLY_ALEXA_VOICE_URL,
          prompt: this.t('IntroPrompt'),
          message,
        },
      };

      if (this.hasScreenInterface()) {
        const aplDirective = {
          type: 'Alexa.Presentation.APL.RenderDocument',
          token: 'imageToken',
          version: '1.0',
          sources: {
            aplAudio: audioDirective.document,
          },
          document: flagTemplate,
          datasources: {
            data: {
              type: 'object',
              properties: {
                ...audioDirective.datasources,
                backgroundUrl: process.env.BACKGROUND_FLAG_GIF,
              },
              transformers: [
                {
                  template: 'aplAudio',
                  outputName: 'aplAudioData',
                  transformer: 'aplAudioToSpeech',
                },
              ],
            },
          },
        };

        const commandDirective = {
          type: 'Alexa.Presentation.APL.ExecuteCommands',
          token: 'imageToken',
          commands: [
            {
              type: 'SpeakItem',
              componentId: 'speakItemText',
              highlightMode: 'line',
              align: 'center',
            },
          ],
        };

        this.$alexaSkill.addAPLDirective(aplDirective);
        this.$alexaSkill.addAPLDirective(commandDirective);
      } else {
        this.$alexaSkill.addAPLDirective(audioDirective);
      }
    }

    return this.ask(this.t('Intro'), this.t('Reprompt'));
  },
};

module.exports = handler;
