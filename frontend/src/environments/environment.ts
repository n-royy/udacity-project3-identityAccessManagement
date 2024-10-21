/* @DONE replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'namnn10-udac-project3-cffs.us', // the auth0 domain prefix
    audience: 'https://udac-cffs/api', // the audience set for the auth0 app
    clientId: 'SFC4CICDwluPOQvZe4ThsFl9EtT5ZCJl', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
