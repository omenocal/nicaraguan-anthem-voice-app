'use strict';

module.exports = {
  alexaSkill: {
    nlu: {
      name: 'alexa',
      lang: {
        en: ['en-US', 'en-GB', 'en-CA', 'en-AU', 'en-IN'],
        es: ['es-US', 'es-ES', 'es-MX'],
      },
    },
    skillId: process.env.SKILL_ID,
    askProfile: 'default',
    endpoint: process.env.LAMBDA_ENDPOINT,
    manifest: { // Info that does not change per stage
      privacyAndCompliance: {
        allowsPurchases: false,
        locales: {
          'en-US': {
            privacyPolicyUrl: '',
            termsOfUseUrl: '',
          },
          'en-GB': {
            privacyPolicyUrl: '',
            termsOfUseUrl: '',
          },
          'en-CA': {
            privacyPolicyUrl: '',
            termsOfUseUrl: '',
          },
          'en-AU': {
            privacyPolicyUrl: '',
            termsOfUseUrl: '',
          },
          'en-IN': {
            privacyPolicyUrl: '',
            termsOfUseUrl: '',
          },
          'es-US': {
            privacyPolicyUrl: '',
            termsOfUseUrl: '',
          },
          'es-MX': {
            privacyPolicyUrl: '',
            termsOfUseUrl: '',
          },
          'es-ES': {
            privacyPolicyUrl: '',
            termsOfUseUrl: '',
          },
        },
        isExportCompliant: true,
        containsAds: false,
        isChildDirected: false,
        usesPersonalInfo: false,
      },
      apis: {
        custom: {
          interfaces: [
            {
              type: 'ALEXA_PRESENTATION_APL',
            },
          ],
        },
      },
      permissions: [],
      publishingInformation: {
        locales: {
          'en-US': {
            name: 'Nicaraguan Anthem',
            summary: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.',
            description: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.\n\nDISCLAIMER: The skill has some content in Spanish as the anthem is interpreted in the original language.',
            keywords: ['alphabetic', 'sing', 'song', 'voice', 'ipa'],
            examplePhrases: ['Alexa, open Nicaraguan Anthem.'],
            largeIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/222c/11e1a9854fc44b71a9c7cdc42bca08e1/APP_ICON_LARGE?versionId=asQv3JH2f7tMmA50CQiwdWMAJYXN19BG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5551a10d9cbe32a756bc7477661a86742fd0b3846e598dbc2b5a25435c7c18fa',
            smallIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/ac18/8159d2592d05408792ca75c7423ada10/APP_ICON?versionId=tTnZJNWlXKEMJXej5yYG9SW3LKFuohcM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0320b8809bfb9f510d1a2d88438d1acd16a47315a32177f97506ccd5cffd711e',
          },
          'en-GB': {
            name: 'Nicaraguan Anthem',
            summary: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.',
            description: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.\n\nDISCLAIMER: The skill has some content in Spanish as the anthem is interpreted in the original language.',
            keywords: ['alphabetic', 'sing', 'song', 'voice', 'ipa'],
            examplePhrases: ['Alexa, open Nicaraguan Anthem.'],
            largeIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/222c/11e1a9854fc44b71a9c7cdc42bca08e1/APP_ICON_LARGE?versionId=asQv3JH2f7tMmA50CQiwdWMAJYXN19BG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5551a10d9cbe32a756bc7477661a86742fd0b3846e598dbc2b5a25435c7c18fa',
            smallIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/ac18/8159d2592d05408792ca75c7423ada10/APP_ICON?versionId=tTnZJNWlXKEMJXej5yYG9SW3LKFuohcM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0320b8809bfb9f510d1a2d88438d1acd16a47315a32177f97506ccd5cffd711e',
          },
          'en-CA': {
            name: 'Nicaraguan Anthem',
            summary: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.',
            description: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.\n\nDISCLAIMER: The skill has some content in Spanish as the anthem is interpreted in the original language.',
            keywords: ['alphabetic', 'sing', 'song', 'voice', 'ipa'],
            examplePhrases: ['Alexa, open Nicaraguan Anthem.'],
            largeIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/222c/11e1a9854fc44b71a9c7cdc42bca08e1/APP_ICON_LARGE?versionId=asQv3JH2f7tMmA50CQiwdWMAJYXN19BG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5551a10d9cbe32a756bc7477661a86742fd0b3846e598dbc2b5a25435c7c18fa',
            smallIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/ac18/8159d2592d05408792ca75c7423ada10/APP_ICON?versionId=tTnZJNWlXKEMJXej5yYG9SW3LKFuohcM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0320b8809bfb9f510d1a2d88438d1acd16a47315a32177f97506ccd5cffd711e',
          },
          'en-AU': {
            name: 'Nicaraguan Anthem',
            summary: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.',
            description: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.\n\nDISCLAIMER: The skill has some content in Spanish as the anthem is interpreted in the original language.',
            keywords: ['alphabetic', 'sing', 'song', 'voice', 'ipa'],
            examplePhrases: ['Alexa, open Nicaraguan Anthem.'],
            largeIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/222c/11e1a9854fc44b71a9c7cdc42bca08e1/APP_ICON_LARGE?versionId=asQv3JH2f7tMmA50CQiwdWMAJYXN19BG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5551a10d9cbe32a756bc7477661a86742fd0b3846e598dbc2b5a25435c7c18fa',
            smallIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/ac18/8159d2592d05408792ca75c7423ada10/APP_ICON?versionId=tTnZJNWlXKEMJXej5yYG9SW3LKFuohcM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0320b8809bfb9f510d1a2d88438d1acd16a47315a32177f97506ccd5cffd711e',
          },
          'en-IN': {
            name: 'Nicaraguan Anthem',
            summary: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.',
            description: 'Listen to Alexa singing the Nicaraguan Anthem with her own voice.\n\nDISCLAIMER: The skill has some content in Spanish as the anthem is interpreted in the original language.',
            keywords: ['alphabetic', 'sing', 'song', 'voice', 'ipa'],
            examplePhrases: ['Alexa, open Nicaraguan Anthem.'],
            largeIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/222c/11e1a9854fc44b71a9c7cdc42bca08e1/APP_ICON_LARGE?versionId=asQv3JH2f7tMmA50CQiwdWMAJYXN19BG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5551a10d9cbe32a756bc7477661a86742fd0b3846e598dbc2b5a25435c7c18fa',
            smallIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/ac18/8159d2592d05408792ca75c7423ada10/APP_ICON?versionId=tTnZJNWlXKEMJXej5yYG9SW3LKFuohcM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0320b8809bfb9f510d1a2d88438d1acd16a47315a32177f97506ccd5cffd711e',
          },
          'es-US': {
            name: 'Himno de Nicaragua',
            summary: 'Escucha a Alexa cantar el himno de la República de Nicaragua con su propia voz.',
            description: 'Escucha a Alexa cantar el himno de la República de Nicaragua con su propia voz.',
            keywords: ['alphabetic', 'sing', 'song', 'voice', 'ipa'],
            examplePhrases: ['Alexa, pon Himno de Nicaragua.'],
            largeIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/222c/11e1a9854fc44b71a9c7cdc42bca08e1/APP_ICON_LARGE?versionId=asQv3JH2f7tMmA50CQiwdWMAJYXN19BG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5551a10d9cbe32a756bc7477661a86742fd0b3846e598dbc2b5a25435c7c18fa',
            smallIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/ac18/8159d2592d05408792ca75c7423ada10/APP_ICON?versionId=tTnZJNWlXKEMJXej5yYG9SW3LKFuohcM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0320b8809bfb9f510d1a2d88438d1acd16a47315a32177f97506ccd5cffd711e',
          },
          'es-MX': {
            name: 'Himno de Nicaragua',
            summary: 'Escucha a Alexa cantar el himno de la República de Nicaragua con su propia voz.',
            description: 'Escucha a Alexa cantar el himno de la República de Nicaragua con su propia voz.',
            keywords: ['alphabetic', 'sing', 'song', 'voice', 'ipa'],
            examplePhrases: ['Alexa, pon Himno de Nicaragua.'],
            largeIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/222c/11e1a9854fc44b71a9c7cdc42bca08e1/APP_ICON_LARGE?versionId=asQv3JH2f7tMmA50CQiwdWMAJYXN19BG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5551a10d9cbe32a756bc7477661a86742fd0b3846e598dbc2b5a25435c7c18fa',
            smallIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/ac18/8159d2592d05408792ca75c7423ada10/APP_ICON?versionId=tTnZJNWlXKEMJXej5yYG9SW3LKFuohcM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0320b8809bfb9f510d1a2d88438d1acd16a47315a32177f97506ccd5cffd711e',
          },
          'es-ES': {
            name: 'Himno de Nicaragua',
            summary: 'Escucha a Alexa cantar el himno de la República de Nicaragua con su propia voz.',
            description: 'Escucha a Alexa cantar el himno de la República de Nicaragua con su propia voz.',
            keywords: ['alphabetic', 'sing', 'song', 'voice', 'ipa'],
            examplePhrases: ['Alexa, pon Himno de Nicaragua.'],
            largeIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/222c/11e1a9854fc44b71a9c7cdc42bca08e1/APP_ICON_LARGE?versionId=asQv3JH2f7tMmA50CQiwdWMAJYXN19BG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5551a10d9cbe32a756bc7477661a86742fd0b3846e598dbc2b5a25435c7c18fa',
            smallIconUri: 'https://s3.amazonaws.com/CAPS-SSE/echo_developer/ac18/8159d2592d05408792ca75c7423ada10/APP_ICON?versionId=tTnZJNWlXKEMJXej5yYG9SW3LKFuohcM&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200907T031833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAWBV6LQ4QIH3MSWPB%2F20200907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0320b8809bfb9f510d1a2d88438d1acd16a47315a32177f97506ccd5cffd711e',
          },
        },
      },
    },
  },
  googleAction: {
    nlu: {
      name: 'dialogflow',
    },
    dialogflow: {
      keyFile: 'key-file.json',
      agent: {
        language: 'en',
        disableInteractionLogs: false,
        disableStackdriverLogs: true,
        googleAssistant: {
          googleAssistantCompatible: true,
          welcomeIntentSignInRequired: false,
          startIntents: [],
          systemIntents: [],
          endIntentIds: [],
          oAuthLinking: {
            required: false,
            grantType: 'AUTH_CODE_GRANT',
          },
          voiceType: 'FEMALE_1',
          capabilities: [],
          protocolVersion: 'V2',
          autoPreviewEnabled: true,
          isDeviceAgent: false,
        },
        defaultTimezone: 'America/Managua',
        isPrivate: true,
        supportedLanguages: [
          'es',
        ],
        onePlatformApiVersion: 'v2',
        analyzeQueryTextSentiment: false,
        enabledKnowledgeBaseNames: [],
        knowledgeServiceConfidenceAdjustment: -0.4,
        webhook: {
          url: process.env.API_GATEWAY_ENDPOINT,
          available: true,
          useForDomains: false,
          cloudFunctionsEnabled: false,
          cloudFunctionsInitialized: false,
        },
      },
    },
  },
};
