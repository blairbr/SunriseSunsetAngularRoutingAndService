import { HomeComponent } from './home/home.component';
import { SunsetComponent } from './sunset/sunset.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SunriseComponent } from './sunrise/sunrise.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sunrise', component: SunriseComponent },
  { path: 'sunset', component: SunsetComponent },
  //redirects
  { path: 'sunrises', redirectTo: '/sunrise', pathMatch: 'full' },
  { path: 'sunsets', redirectTo: '/sunset', pathMatch: 'full' },

  //** = wildcard - catch all bad routes and redirect them to the not found page
  { path: '**', component: PageNotFoundComponent } //order matters
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
