import { APP_INITIALIZER, ApplicationConfig, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { WeddingAccessService } from './core/services/wedding_access_service';


export function initWeddingServiceFactory(weddingService: WeddingAccessService) {
  return () => weddingService.initLocation();
}

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    WeddingAccessService,
    {
      provide: APP_INITIALIZER,
      useFactory: initWeddingServiceFactory,
      deps: [WeddingAccessService],
      multi: true
    }
  
  ]
};
