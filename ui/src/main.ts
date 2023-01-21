import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './main/main.module';
import { environment } from './environments/environment';

// import 'codemirror/lib/codemirror';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/addon/fold/foldgutter';
// import 'codemirror/addon/fold/brace-fold';
// import 'codemirror/addon/edit/closebrackets';
// import 'codemirror/addon/edit/matchbrackets';
// import 'codemirror/addon/lint/lint';
// import 'codemirror/addon/lint/json-lint';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(MainModule)
  .catch((err) => console.error(err));
