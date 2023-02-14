import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

// establecer las rutas(las pantallas) de url
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
