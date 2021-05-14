import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShakaPlayerComponent } from './shared/shaka-player/shaka-player.component';

@NgModule({
  declarations: [
    AppComponent,
    ShakaPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
