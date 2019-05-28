import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    UploadBlogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
