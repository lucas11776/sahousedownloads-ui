import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent }            from './pages/home/home.component';
import { LogComponent }             from './pages/log/log.component';
import { AccountComponent }         from './pages/account/account.component';
import { UserComponent }            from './pages/user/user.component';
import { BlogComponent }            from './pages/blog/blog.component';
import { BlogSingleComponent }      from './pages/blog-single/blog-single.component';
import { AlbumComponent }           from './pages/album/album.component';
import { AlbumSingleComponent }     from './pages/album-single/album-single.component';
import { UploadBlogComponent }      from './pages/upload-blog/upload-blog.component';
import { UploadSongComponent }      from './pages/upload-song/upload-song.component';
import { ContactComponent }         from './pages/contact/contact.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ResetPasswordComponent }   from './pages/reset-password/reset-password.component';

// Auth-Guard
import { UserGuard }   from './auth/user.guard';
import { EditorGuard } from './auth/editor.guard';
import { GuestGuard }  from './auth/guest.guard';

const routes: Routes = [
  { path: '' ,                component: HomeComponent },
  { path: 'log',              component: LogComponent, canActivate: [GuestGuard] },
  { path: 'account',          component: AccountComponent, canActivate: [UserGuard] },
  { path: 'account/:id',      component: UserComponent },
  { path: 'blog',             component: BlogComponent },
  { path: 'blog/:id',         component: BlogSingleComponent },
  { path: 'albums',           component: AlbumComponent },
  { path: 'albums/:id',       component: AlbumSingleComponent },
  { path: 'upload/blog',      component: UploadBlogComponent, canActivate: [EditorGuard] },
  { path: 'upload/song',      component: UploadSongComponent, canActivate: [UserGuard] },
  { path: 'contact',          component: ContactComponent },
  { path: 'password/recover', component: RecoverPasswordComponent},
  { path: 'password/reset',   component: ResetPasswordComponent, canActivate: [GuestGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
