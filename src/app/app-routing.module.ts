import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Add this
  { path: 'login', component: LoginComponent }, // Add this
  { path: 'register', component: RegisterComponent }, // Add this  
  { path: 'player-list', component: PlayerListComponent },
  { path: 'player-details/:id', component: PlayerDetailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '404', component: PageNotFoundComponent } // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
