import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AccueilPage} from "./components/accueil/accueil.page";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
      path: 'accueil',
    loadChildren: () => import('./components/accueil/accueil.module').then(m => m.AccueilPageModule)
  },
  {
    path: 'accueil/accueil',
    redirectTo:'accueil'
  },
  {
    path: 'accueil/operations',
    loadChildren: () => import('./components/operations/operations.module').then(m => m.OperationsPageModule)
  },
  {
    path: 'accueil/operations/operations',
    redirectTo:'accueil/operations'
  },

  {
    path: 'accueil/operations/accueil',
    redirectTo:'accueil'
  },
  {
    path: 'accueil/operations/logs',
    redirectTo:'accueil/logs'
  },
  {
    path: 'accueil/operations/profile',
    redirectTo:'accueil/profile'
  },
  {
    path: 'navbar',
    loadChildren: () => import('./components/navbar/navbar.module').then(m => m.NavbarPageModule)
  },
  {
    path: 'accueil/profile',
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'accueil/profile/operations',
    redirectTo:'accueil/operations'
  },

  {
    path: 'accueil/profile/accueil',
    redirectTo:'accueil'
  },
  {
    path: 'accueil/profile/logs',
    redirectTo:'accueil/logs'
  },
  {
    path: 'accueil/profile/profile',
    redirectTo:'accueil/profile'
  },
  {
    path: 'accueil/logs',
    loadChildren: () => import('./components/logs/logs.module').then(m => m.LogsPageModule)
  },
  {
    path: 'accueil/logs/operations',
    redirectTo:'accueil/operations'
  },

  {
    path: 'accueil/logs/accueil',
    redirectTo:'accueil'
  },
  {
    path: 'accueil/logs/logs',
    redirectTo:'accueil/logs'
  },
  {
    path: 'accueil/logs/profile',
    redirectTo:'accueil/profile'
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./components/forget-password/forget-password.module').then(m => m.ForgetPasswordPageModule)
  },
  {
    path: 'account/:id',
    loadChildren: () => import('./components/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'account/:id/operations',
    redirectTo:'accueil/operations'
  },

  {
    path: 'account/:id/accueil',
    redirectTo:'accueil'
  },
  {
    path: 'account/:id/logs',
    redirectTo:'accueil/logs'
  },
  {
    path: 'account/:id/profile',
    redirectTo:'accueil/profile'
  },
  {
    path: 'sessions',
    loadChildren: () => import('./components/sessions/sessions.module').then(m => m.SessionsPageModule)
  },
  {
    path: 'sessions/operations',
    redirectTo:'accueil/operations'
  },

  {
    path: 'sessions/accueil',
    redirectTo:'accueil'
  },
  {
    path: 'sessions/logs',
    redirectTo:'accueil/logs'
  },
  {
    path: 'sessions/profile',
    redirectTo:'accueil/profile'
  },
  {
    path: 'navlogin',
    loadChildren: () => import('./components/navlogin/navlogin.module').then(m => m.NavloginPageModule)
  },
  {
    path: 'home/scan',
    loadChildren: () => import('./components/scan/scan.module').then(m => m.ScanPageModule)
  },
  {
    path: 'home/scan/scan',
    redirectTo:'home/scan'
  },
  {
    path: 'scan',
    redirectTo:'home/scan'
  },
  {
    path: 'home/scan/home',
    redirectTo:'home'
  },
  {
    path: 'home/scan/accueil',
    redirectTo:'accueil'
  },
  {
    path: 'home/scan/profile',
    redirectTo:'accueil/profile'
  },
  {
    path: 'home/scan/logs',
    redirectTo:'accueil/logs'
  },
  {
    path: 'home/scan/operations',
    redirectTo:'accueil/operations'
  },
  {
    path: 'home/home',
    redirectTo:'home'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
