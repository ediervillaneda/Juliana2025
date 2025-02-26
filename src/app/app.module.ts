import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFireworksModule } from '@fireworks-js/angular';

import { AppComponent } from './app.component';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { AnimationComponent } from './pages/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    NgFireworksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
