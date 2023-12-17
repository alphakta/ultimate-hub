import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'player-list', component: PlayerListComponent },
  { path: 'player-details/:id', component: PlayerDetailComponent },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
