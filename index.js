const core = require('@actions/core');
const github = require('@actions/github');

try {
  const branchName = core.getInput('branch-name');
  console.log(`Hello ${branchName}!`);
  const projectColumnName = core.getInput('project-column-name');
  console.log(`Hello ${projectColumnName}!`);
  const releaseTag = core.getInput('release-tag');
  console.log(`Hello ${releaseTag}!`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

