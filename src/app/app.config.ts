import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'
import { provideRouter, withInMemoryScrolling  } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      })
    ),
    provideHttpClient()
  ],
};
