// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBdIIMdbdiDUzr00P2wLNqZCcEpSs14TVM",
    authDomain: "webdev2-briavers.firebaseapp.com",
    databaseURL: "https://webdev2-briavers.firebaseio.com",
    projectId: "webdev2-briavers",
    storageBucket: "webdev2-briavers.appspot.com",
    messagingSenderId: "785558727804"

  },
  nmdAPIV1: {
    url: 'http://192.168.0.149:8080/assets/data/api/v1',
    endPoints: {
      'posts': '/posts.json'
    }
  },
  trotsAPI: {
    url: 'http://www.gdm.gent/trots/api/',
    endPoints: {
      'projects': '/projects.json'
    }
  }
};
