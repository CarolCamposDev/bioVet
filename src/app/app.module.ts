import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './login/login.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BanhoETosaComponent } from './banho-e-tosa/banho-e-tosa.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendamentoSucessoComponent } from './agendamento-sucesso/agendamento-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProdutoComponent,
    LoginComponent,
    TopoComponent,
    RodapeComponent,
    BanhoETosaComponent,
    AgendamentoComponent,
    AgendamentoSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
