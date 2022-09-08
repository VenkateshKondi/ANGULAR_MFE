import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule.forRoot([
    {
      path:'mfe',
      loadChildren :()=>import('remote/Module').then((m)=>m.ExposeModule)
    }
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
