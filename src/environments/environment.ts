// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  chainId: 1,
  netlifyFnServer: 'http://localhost:8888/.netlify/functions/',
  // netlifyFnServer: 'https://propertys.xyz/.netlify/functions/',
  apiUrl: 'https://lit-island-00614.herokuapp.com/api/v1',
  moralisAppId: "dGameje8mQgxmoSUgOoaUgcuIFhNzVMlWrIJjSke",
  moralisServerUrl: "https://8oqk6qzhmmsf.usemoralis.com:2053/server",
  network: "eth",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
