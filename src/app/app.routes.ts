import { Routes } from '@angular/router';
import { CounterPageComponent } from './countdown/pages/counter-page/counter-page.component';
import { InformationPageComponent } from './information/pages/information-page/information-page.component';
import { WeddingGuard } from './core/guards/wedding_guard';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent,
        canActivate: [WeddingGuard]
    },
    {
        path: 'info',
        component: InformationPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
