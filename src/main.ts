/// <reference path="../typings/globals/google.maps/index.d.ts" />
import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
import {AppModule} from './ng2-address';

// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
