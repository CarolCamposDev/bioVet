import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BanhoETosaComponent } from './banho-e-tosa/banho-e-tosa.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendamentoSucessoComponent } from './agendamento-sucesso/agendamento-sucesso.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProdutosComponent,
    LoginComponent,
    TopoComponent,
    RodapeComponent,
    BanhoETosaComponent,
    AgendamentoComponent,
    AgendamentoSucessoComponent,
    FaleConoscoComponent
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
