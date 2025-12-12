import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { Notfoundpage } from './core/components/notfoundpage/notfoundpage';

export const routes: Routes = [
   
    {path:'', component: HomePage},
    {
        path:'**', component:Notfoundpage
    }
];
