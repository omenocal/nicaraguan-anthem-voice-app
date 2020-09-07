'use strict';

const anthem = require('./anthem');
const audioTemplateEs = require('./audioTemplateEs');
const audioTemplateEn = require('./audioTemplateEn');

const handler = {
  LAUNCH() {
    const locale = this.getLocale().toLowerCase();
    let message;
    let template = audioTemplateEn;

    if (locale === 'es-es') {
      message = `${anthem.join(' ')} ${this.t('Goodbye')}`;
      template = audioTemplateEs;
    }

    if (this.isAlexaSkill()) {
      this.$alexaSkill.addAPLDirective({
        type: 'Alexa.Presentation.APLA.RenderDocument',
        token: 'token',
        document: template,
        datasources: {
          anthemOnlyMusic: process.env.ANTHEM_ONLY_MUSIC_URL,
          anthemAlexaVoice: process.env.ANTHEM_URL,
          goodbye: this.t('Goodbye'),
          message,
        },
      });
    }

    return this.tell(this.t('Intro'));
  },

  CancelIntent() {
    return this.toIntent('END');
  },
  StopIntent() {
    return this.toIntent('END');
  },
  END() {
    if (this.isGoogleAction() || this.isIntentRequest()) {
      return this.tell(this.t('Exit'));
    }

    return this;
  },
  ON_HEALTH_CHECK() {
    return this.tell(this.t('HealthCheck'));
  },

  Unhandled() {
    return this.toIntent('LAUNCH');
  },
};

module.exports = handler;
