import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { PixelModule } from 'ngx-pixel';
// import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('G-0KZ0DQ62D1'),
    PixelModule.forRoot({ enabled: true, pixelId: '191408006521656' }),
    // GoogleTagManagerModule.forRoot({
    //   id: 'GTM-ND93L6Q',
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
