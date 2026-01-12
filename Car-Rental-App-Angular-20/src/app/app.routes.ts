import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';
import { Booking } from './pages/booking/booking';
import { authguardGuard } from './auth/guards/authguard-guard';
import { Home } from './pages/home/home';
import { Vehiclelist } from './pages/vehiclelist/vehiclelist';
import { Homepagelayout } from './pages/homepagelayout/homepagelayout';

export const routes: Routes = [
    {
        path:'',
        component:Homepagelayout,
        children:[
            {
                path:'',
                redirectTo:'home',
                pathMatch:'full'
            },
            {
                path:'home',
                component:Home
            },
            {
                path:'vehiclelist',
                component:Vehiclelist
            }
        ]
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        loadComponent: () => import('./pages/layout/layout').then(m => m.Layout),
        canActivate:[authguardGuard],
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
            },
            {
                path:'adminhome',
                loadComponent:()=> import('./pages/adminhome/adminhome').then(m=>m.Adminhome),
            },
            {
                path: 'vehicles',
                loadComponent: () => import('./pages/vehicles/vehicles').then(m => m.Vehicles),
            },
            {
                path: 'bookings',
                loadComponent: () => import('./pages/booking/booking').then(m => m.Booking),
            },
            
        ]
    }
];
