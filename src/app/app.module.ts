import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherMainComponent } from './Components/weather-main/weather-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
