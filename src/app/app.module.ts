import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* ANGULAR MATERIAL */
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/* COMPONENTS */
import { DialogComponent } from './components/dialog/dialog.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/* PAGES */
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CategoryComponent } from './pages/category/category.component';
import { GameComponent } from './pages/game/game.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonToggleComponent,
    DialogComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    CategoryComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
