import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DogsPageComponent } from './pages/dogs-page/dogs-page.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { DogCardComponent } from './components/dog-card/dog-card.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    DogsPageComponent,
    NavComponent,
    DogCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
