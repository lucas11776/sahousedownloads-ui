import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { HomeComponent }        from './pages/home/home.component';
import { LogComponent }         from './pages/log/log.component';
import { AccountComponent }     from './pages/account/account.component';
import { UserComponent }        from './pages/user/user.component';
import { ContactComponent }     from './pages/contact/contact.component';
import { BlogComponent }        from './pages/blog/blog.component';
import { BlogSingleComponent }  from './pages/blog-single/blog-single.component';
import { AlbumComponent }       from './pages/album/album.component';
import { AlbumSingleComponent } from './pages/album-single/album-single.component';
import { UploadSongComponent }  from './pages/upload-song/upload-song.component';
import { UploadBlogComponent }  from './pages/upload-blog/upload-blog.component';
import { NavbarComponent }      from './components/navbar/navbar.component';
import { RegisterComponent }    from './components/register/register.component';
import { LoginComponent }       from './components/login/login.component';
import { TokenInterceptor }     from './interceptor/token-interceptor.service';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogComponent,
    AccountComponent,
    UserComponent,
    ContactComponent,
    BlogComponent,
    BlogSingleComponent,
    AlbumComponent,
    AlbumSingleComponent,
    UploadSongComponent,
    UploadBlogComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    RecoverPasswordComponent,
    ResetPasswordComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
