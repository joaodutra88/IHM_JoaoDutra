import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoTabelaComponent } from './components/produto-tabela/produto-tabela.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'produtotabela',
    component: ProdutoTabelaComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule],
})
export class AppRoutingModule {}
