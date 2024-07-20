import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { MemoriaComponent } from './memoria/memoria.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'inicio',
        pathMatch: 'full',
        
    },
    {
        path: 'inicio',
        component: InicioComponent,
    },
    {
        path: 'memoria',
        component: MemoriaComponent,
    }

   
];

