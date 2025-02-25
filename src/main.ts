import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
  import { signal } from "@angular/core";
export const show = signal(1);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


