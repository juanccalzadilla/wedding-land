import { Routes } from '@angular/router';
import { CounterPageComponent } from './countdown/pages/counter-page/counter-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
