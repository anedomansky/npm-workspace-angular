import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterAPIImpl } from './injections';

import { AppLoader } from '@anedomansky/loader';
import { NgxCommonLibraryModule } from '@anedomansky/ngx-common-library';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxCommonLibraryModule],
  providers: [
    {
      provide: CounterAPIImpl,
      useValue: AppLoader.getCounterInstance(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
