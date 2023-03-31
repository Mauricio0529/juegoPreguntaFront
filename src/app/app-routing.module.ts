import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/user/category/category.component';
import { GameComponent } from './pages/user/game/game.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminGuardService } from './services/guards/admin/admin-guard.service';
import { UserGuardService } from './services/guards/user/user-guard.service';
import { ClasificationScoreComponent } from './pages/user/clasification-score/clasification-score.component';

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
  {
    path: 'admin-dashboard',
    component: DashboardComponent,
    pathMatch:'full',
    canActivate: [AdminGuardService]
  },
  {
    path: 'category',
    component: CategoryComponent,
    pathMatch:'full',
    canActivate: [UserGuardService]
  },
  {
    path: 'game',
    component: GameComponent,
    pathMatch:'full',
    canActivate: [UserGuardService]
  },
  {
    path: 'clasification',
    component: ClasificationScoreComponent,
    pathMatch:'full',
    canActivate: [UserGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
