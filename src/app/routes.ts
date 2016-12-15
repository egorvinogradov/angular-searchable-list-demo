import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { App } from './app';
import { Main } from './containers/main';
import { Card } from './containers/card';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: Main,
        children: [
            {
                path: '',
                component: Card,
            },
            {
                path: 'client/:name',
                component: Card,
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/',
    },
]);
