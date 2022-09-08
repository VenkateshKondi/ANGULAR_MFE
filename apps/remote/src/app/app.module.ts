import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '', component: HomeComponent
    },
    
    {
      path:'expose',
      loadChildren:()=>import('./expose/expose.module').then((m)=>m.ExposeModule)
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
