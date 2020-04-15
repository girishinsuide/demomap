import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; 
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatefpComponent } from './createfp/createfp.component';
import { DisplayfpComponent } from './displayfp/displayfp.component';
import { TestComponent } from './test/test.component';
import { NgxSortableModule } from 'ngx-sortable'


const appRoutes: Routes = [
{ path: 'create', component: CreatefpComponent },
{ path: 'display/:cor', component: DisplayfpComponent },
{ path: 'test', component: TestComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    CreatefpComponent,
    DisplayfpComponent,
    TestComponent
  ],
  imports: [
  NgxSortableModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),


    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
