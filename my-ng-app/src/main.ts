// the enableProdMode is the object that will decide wheather the
// app build is for Dev / Test OR Production
import { enableProdMode } from '@angular/core';
// platformBrowserDynamic, the object that will be sued to bootstrap the first
// angular module aka entry-point angular module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// The 'AppModule' is a bootstrap module aka entry-point module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
