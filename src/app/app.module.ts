import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UnknownDataPipe } from './shared/unknown-data.pipe';
import { HoverCardDirective } from './shared/hover-card.directive';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerCardComponent } from './players/player-list/player-card/player-card.component';
import { LoaderComponent } from './loader/loader.component';
import {NgOptimizedImage} from "@angular/common";
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UnknownDataPipe,
    HoverCardDirective,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerCardComponent,
    LoaderComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
