import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

  { path: 'courses', canActivate: [AuthGuard], loadChildren: './pages/courses/courses.module#CoursesPageModule' },
  { path: 'unit', canActivate: [AuthGuard], loadChildren: './pages/unit/unit.module#UnitPageModule' },
  { path: 'video', canActivate: [AuthGuard], loadChildren: './pages/video/video.module#VideoPageModule' },
  { path: 'textbook',canActivate: [AuthGuard], loadChildren: './pages/textbook/textbook.module#TextbookPageModule' },
  { path: 'favorite', canActivate: [AuthGuard], loadChildren: './pages/favorite/favorite.module#FavoritePageModule' },
  { path: 'euee', canActivate: [AuthGuard], loadChildren: './pages/euee/euee.module#EUEEPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
