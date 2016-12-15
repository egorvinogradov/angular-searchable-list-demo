import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { routes } from './app/routes';
import { Header } from './app/ui/header';
import { Sidebar } from './app/ui/sidebar';

import { App } from './app/app';
import { Main } from './app/containers/main';
import { Card } from './app/containers/card';

@NgModule({
    imports: [
        BrowserModule,
        routes,
    ],
    declarations: [
        Header,
        Sidebar,
        App,
        Main,
        Card,
    ],
    bootstrap: [ App ]
})
export class AppModule {}

// enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
