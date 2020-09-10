'use strict';

const handler = {
  LAUNCH() {
    return this.toIntent('PrivateSingAnthem');
  },
  YesIntent() {
    return this.toIntent('PrivateSingAnthem');
  },
  ResumeIntent() {
    return this.toIntent('PrivateSingAnthem');
  },
  RepeatIntent() {
    return this.toIntent('PrivateSingAnthem');
  },
  StartOverIntent() {
    return this.toIntent('PrivateSingAnthem');
  },

  NoIntent() {
    return this.toIntent('END');
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
    return this.toIntent('PrivateSingAnthem');
  },
};

module.exports = handler;
