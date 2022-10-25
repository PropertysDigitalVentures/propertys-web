import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { PixelModule } from 'ngx-pixel';
import { AppHeaderModule } from './shared/components/app-header/app-header.module';
import { AppFooterModule } from './shared/components/app-footer/app-footer.module';
// import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppHeaderModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    AppFooterModule,
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
