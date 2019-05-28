import { NgModule, Component }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './pages/home/home.component';
import { LogComponent }         from './pages/log/log.component';
import { AccountComponent }     from './pages/account/account.component';
import { UserComponent }        from './pages/user/user.component';
import { BlogComponent }        from './pages/blog/blog.component';
import { BlogSingleComponent }  from './pages/blog-single/blog-single.component';
import { AlbumComponent }       from './pages/album/album.component';
import { AlbumSingleComponent } from './pages/album-single/album-single.component';
import { UploadBlogComponent }  from './pages/upload-blog/upload-blog.component';
import { UploadSongComponent }  from './pages/upload-song/upload-song.component';
import { ContactComponent }     from './pages/contact/contact.component';
 
const routes: Routes = [
  { path: '/' , component: HomeComponent },
  { path: 'log', component: LogComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/:id', component: UserComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogSingleComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'albums/:id', component: AlbumSingleComponent },
  { path: 'upload/blog', component: UploadBlogComponent },
  { path: 'upload/song', component: UploadSongComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
