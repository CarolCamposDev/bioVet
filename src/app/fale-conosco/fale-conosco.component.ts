import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit{
  ngOnInit(): void {
    document.title = "BioVet 4 patas| Fale Conosco"
  }
}
