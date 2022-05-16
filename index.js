const core = require('@actions/core')
const { HttpClient  } = require('@actions/http-client')
const { BasicCredentialHandler } = require('@actions/http-client/lib/auth')

try {
  const auth = new BasicCredentialHandler(
    core.getInput('imd-username'), core.getInput('imd-password')
  )
  const client = new HttpClient('import-map-deployer', [auth])
  const patchUrl = `${core.getInput('imd-server')}/service?env=${core.getInput('imd-env')}`
  const response = await client.patchJson(patchUrl, {
    service: core.getInput('service'),
    url: core.getInput('url')
  })
  core.setOutput('status', response.status)
} catch (error) {
  core.setFailed(error.message)
}