# Nicaraguan Anthem Voice App

## Directory Structure

    models/ -> Interaction model for every locale
    platforms/ -> Alexa Skill and Dialogflow model
    src/ -> Flow logic
    .editorconfig -> IDE configuration
    .eslintrc.json -> Eslint configuration
    .gitignore -> Git ignore rules
    package.json -> Dependencies
    project.js -> Jovo app configuration file
    README.md

### Deployment for Dialogflow model

Follow this [tutorial](https://www.jovo.tech/tutorials/deploy-dialogflow-agent) to create a JSON key to connect your google account with the google cloud project. Then run the following commands in the console:

```bash
sudo gcloud auth activate-service-account --key-file=key-file.json
sudo jovo deploy -p googleAction --project-id projectId
```

## Troubleshooting

##### Alexa says she cannot find this skill.
* Make sure to use the same Amazon account for your device that also has access to the skill in the developer portal. You can also check out how to start a conversation with Alexa in your skill. See this [link](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/supported-phrases-to-begin-a-conversation) to learn how to begin a conversation.

##### The skill beta testing mode is not available
* You must fill in all the information required in every tab of the skill in the developer portal to enable testing mode.

##### I cannot test the skill in the developer console
* You must fill in the **interaction model** and **configuration** tab to test a skill.
* If you already submitted the skill for certification, you can just test your skill in an Alexa-integrated software or device.
* Be aware that the service simulator on the test tab does not play audio.

##### Alexa says: There was a problem with the requested skill response
* You most likely have a syntax error in your code. You can find the error by checking logs in CloudWatch. Login in with your AWS account, hit this [link](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logs:) and look for the logs of your lambda function. There might be several logs ordered by date. You can click on the most recent one and look for the error.
