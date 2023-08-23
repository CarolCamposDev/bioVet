import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { BanhoETosaComponent } from './banho-e-tosa/banho-e-tosa.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {
    path: 'principal', 
    component: PrincipalComponent
  },

  {
    path: 'login', 
    component: LoginComponent
  },

  {
    path: 'banho-e-tosa',
    component: BanhoETosaComponent
  },

  {
    path: 'produto',
    component: ProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
