import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './libs/service/auth/auth.guard';
import { SpotifyAuthComponent } from './libs/component/spotify-auth-component/spotify-auth-component.component';
import { HomeComponent } from './libs/component/home/home.component';
import { ProfileComponent } from './libs/component/profile/profile.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'authorized',
  component: SpotifyAuthComponent,
  canActivate: [AuthGuard],
}, {
  path: 'profile',
  component: ProfileComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
