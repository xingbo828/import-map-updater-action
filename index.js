const core = require('@actions/core');
const request = require('request');

const exec = async () => {
  try {
    const response = await request(
      core.getInput('imd-server'),
      core.getInput('imd-env'),
      {
        service: core.getInput('service'),
        url: core.getInput('url'),
      },
      {
        username: core.getInput('imd-username'),
        password: core.getInput('imd-password'),
      }
    );
    console.log(`Response:, ${JSON.stringify(response.data)}`);
    core.setOutput('status', response.status);
  } catch (error) {
    core.setFailed(error.message);
  }
};

exec();
