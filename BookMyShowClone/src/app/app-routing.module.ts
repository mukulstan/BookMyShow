import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {NotfoundComponent} from './notfound/notfound.component'
// import { AuthGuard } from './auth/auth.guard';
// import {LoggedInUserGuard} from './auth/logged-in-user.guard'
const routes: Routes = [
  { path: '', redirectTo: 'signup',pathMatch:'full' },
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  // canLoad:[LoggedInUserGuard] 
// },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  // { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'add-screen', loadChildren: () => import('./add-screen/add-screen.module').then(m => m.AddScreenModule) },
  { path: 'add-screen-schedule', loadChildren: () => import('./add-screen-schedule/add-screen-schedule.module').then(m => m.AddScreenScheduleModule) },
  { path: 'add-movie', loadChildren: () => import('./movie/add-movie/add-movie.module').then(m => m.AddMovieModule) },
  // { path: '**', component: NotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


