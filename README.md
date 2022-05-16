# Import map updater action

This action calls your own import map deployer server to update import-map.json in a given environment.

## Inputs

### `imd-server`

The url of the import map deployer server.

### `imd-username`

The basic auth user name of import map deployer server.

### `imd-password`

The basic auth password of import map deployer server.

### `imd-env`

The environment to update the import-map.json file.

### `service`

The name of the application to update. ex:@your-company/your-app.

### `url`

The url of your app to be updated to.




## Example usage
```
uses: xingbo828/import-map-updater-action@v1
with:
  imd-server: 'http://my-imd-server'
  imd-username: 'foo'
  imd-password: 'bar'
  imd-env: 'test'
  service: '@my-company/my-project'
  url: 'https://cdn.xxx.xx/test/my-project.js'
```