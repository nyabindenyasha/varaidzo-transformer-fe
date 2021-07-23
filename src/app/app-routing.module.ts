import { CaptureManholeIntrusionComponent } from './components/manhole-intrusion/capture-manhole-intrusion/capture-manhole-intrusion.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './login';
import { ManholesComponent } from './components/manholes/manholes.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OverheadCablesComponent } from './components/overhead-cables/overhead-cables.component';
import { AddManHoleComponent } from './components/manholes/add-man-hole/add-man-hole.component';
import { HomeComponent } from './home';
import { AuthGuard } from './_guards';
import { RegisterComponent } from './register';
import { ManholeIntrusionComponent } from './components/manhole-intrusion/manhole-intrusion.component';
import { ChartsOverheadComponent } from './components/charts-overhead/charts-overhead.component';
import { ChartsManholeComponent } from './components/charts-manhole/charts-manhole.component';
import { TransformerLocationComponent } from './components/transformer-location/transformer-location.component';

const routes: Routes = [

  {
    path: '', component: HomePageComponent, canActivate: [AuthGuard], children: [
      // path: 'signed', component: HomePageComponent, children: [
      // { path: 'manholes', component: ManholesComponent },
      { path: 'manholes', component: TransformerLocationComponent },
      { path: 'overhead', component: OverheadCablesComponent },
      { path: 'add', component: AddManHoleComponent },
      { path: 'add-intr', component: CaptureManholeIntrusionComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'charts-manhole', component: ChartsManholeComponent },
      { path: 'charts-overhead', component: ChartsOverheadComponent },
      { path: 'users', component: HomeComponent },
      { path: 'signUp', component: SignUpComponent },
      { path: 'manhole-intrusions', component: ManholeIntrusionComponent },
    ]
  },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
