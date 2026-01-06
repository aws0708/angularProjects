import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';
import { Booking } from './pages/booking/booking';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        // component: Layout,
        loadComponent: () => import('./pages/layout/layout').then(m => m.Layout),
        children: [
            {
                path: 'dashboard',
                // component: Dashboard
                loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
            },
            {
                path: 'vehicles',
                // component: Vehicles,
                loadComponent: () => import('./pages/vehicles/vehicles').then(m => m.Vehicles),
            },
            {
                path: 'bookings',
                loadComponent: () => import('./pages/booking/booking').then(m => m.Booking)
            }
        ]
    }
];
