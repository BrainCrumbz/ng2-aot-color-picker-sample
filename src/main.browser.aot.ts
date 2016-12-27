import './polyfills.browser';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleNgFactory } from '../codegen/src/app/app.module.ngfactory';

console.log('AOT build');

enableProdMode();

export const platformRef = platformBrowserDynamic();

export function main() {
  return platformRef.bootstrapModuleFactory(AppModuleNgFactory)
    .catch(err => console.error(err));
}

// support async tag or hmr
switch (document.readyState) {
  case 'interactive':
  case 'complete':
    main();
    break;
  case 'loading':
  default:
    document.addEventListener('DOMContentLoaded', () => main());
}
