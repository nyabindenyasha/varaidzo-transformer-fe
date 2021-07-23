import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ManholesComponent } from './components/manholes/manholes.component';
import { OverheadCablesComponent } from './components/overhead-cables/overhead-cables.component';
import { AddManHoleComponent } from './components/manholes/add-man-hole/add-man-hole.component';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { RequestHandler } from './providers/requesthandler';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ChartsComponent } from './components/charts/charts.component';
import { ManholeIntrusionComponent } from './components/manhole-intrusion/manhole-intrusion.component';
import { CaptureManholeIntrusionComponent } from './components/manhole-intrusion/capture-manhole-intrusion/capture-manhole-intrusion.component';
import { ChartsOverheadComponent } from './components/charts-overhead/charts-overhead.component';
import { ChartsManholeComponent } from './components/charts-manhole/charts-manhole.component';
import { TransformerLocationComponent } from './components/transformer-location/transformer-location.component';


// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignUpComponent,
    ManholesComponent,
    OverheadCablesComponent,
    AddManHoleComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    ChartsComponent,
    ManholeIntrusionComponent,
    CaptureManholeIntrusionComponent,
    ChartsOverheadComponent,
    ChartsManholeComponent,
    TransformerLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FusionChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    RequestHandler,
    HttpClientModule,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
