import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { GotyComponent } from './pages/goty/goty.component';


const routes : Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'goty', component: GotyComponent },
    { path: '**', component:HomeComponent }
];


export const appRoutinProviders:any[] = [];
export const routin: ModuleWithProviders = RouterModule.forRoot(routes);