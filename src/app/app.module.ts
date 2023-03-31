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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';

/* COMPONENTS */
import { DialogComponent } from './components/dialog/succes-green/dialog.component';
import { DialogRedComponent } from './components/dialog/alert-red/dialog-red/dialog-red.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/* PAGES */
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CategoryComponent } from './pages/user/category/category.component';
import { GameComponent } from './pages/user/game/game.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { authInterceptorProviders } from './services/httpInterceptors/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ClasificationScoreComponent } from './pages/user/clasification-score/clasification-score.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonToggleComponent,
    DialogComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    CategoryComponent,
    GameComponent,
    SnackBarComponent,
    DashboardComponent,
    ClasificationScoreComponent,
    DialogRedComponent,
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
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  providers: [authInterceptorProviders], // agregamos la constante (metodo)
  bootstrap: [AppComponent]
})
export class AppModule { }
