import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DogsPageComponent } from './pages/dogs-page/dogs-page.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatButtonModule} from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FilterComponent } from './components/filter/filter.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';
import {DialogModule} from '@angular/cdk/dialog';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HighlightSearchPipe } from './shared/highlight-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    DogsPageComponent,
    NavComponent,
    DogCardComponent,
    ProductsPageComponent,
    ProductCardComponent,
    FilterComponent,
    UserCardComponent,
    UserModalComponent,
    HighlightSearchPipe,
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
    MatButtonModule,
    CdkAccordionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
