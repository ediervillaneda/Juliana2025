import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
