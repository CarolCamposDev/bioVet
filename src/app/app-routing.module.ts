import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { BanhoETosaComponent } from './banho-e-tosa/banho-e-tosa.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendamentoSucessoComponent } from './agendamento-sucesso/agendamento-sucesso.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

const routes: Routes = [

  {
    path: "", 
    redirectTo: 'principal', 
    pathMatch: 'full'
  },

  {
    path: 'principal', 
    component: PrincipalComponent
  },

  {
    path: 'agendamento',
    component: AgendamentoComponent
  },

  {
    path: 'agendamento-sucesso',
    component: AgendamentoSucessoComponent
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
    path: 'produtos',
    component: ProdutosComponent
  },

  {
    path: 'fale-conosco',
    component: FaleConoscoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
