import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit{
  ngOnInit(): void {
    document.title = "BioVet 4 patas| Agendamento"
  }

}
