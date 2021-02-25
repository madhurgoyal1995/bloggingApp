import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { BlogService } from './services/blogs/blog.service';
import { AuthGuard } from './common/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    UpdateBlogComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, BlogService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
