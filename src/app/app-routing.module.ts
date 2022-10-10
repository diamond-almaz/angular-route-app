import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGES } from 'src/assets/types';
import { DogsPageComponent } from './pages/dogs-page/dogs-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';

const routes: Routes = [
  {
    path: PAGES.todos,
    component: TodosPageComponent,
  },
  {
    path: `${PAGES.dogs}/:breed`,
    component: DogsPageComponent,
  },
  {
    path: PAGES.products,
    component: ProductsPageComponent,
  },
  {
    path: '**',
    redirectTo: `/${PAGES.todos}`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
