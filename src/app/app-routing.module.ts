import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/guard/auth.guard';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { component: AddBlogComponent, path: 'add-blog', canActivate: [AuthGuard] },
  { component: UpdateBlogComponent, path: 'update-blog/:id', canActivate: [AuthGuard] },
  { component: LoginComponent, path: 'login' },
  { component: SignupComponent, path: 'signup' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
