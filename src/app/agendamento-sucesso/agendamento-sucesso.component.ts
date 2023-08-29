import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento-sucesso',
  templateUrl: './agendamento-sucesso.component.html',
  styleUrls: ['./agendamento-sucesso.component.css']
})
export class AgendamentoSucessoComponent implements OnInit{
  ngOnInit(): void {
    document.title = "BioVet 4 patas| Agendamento"
  }
}

