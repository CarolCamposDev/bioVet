import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banho-e-tosa',
  templateUrl: './banho-e-tosa.component.html',
  styleUrls: ['./banho-e-tosa.component.css']
})
export class BanhoETosaComponent implements OnInit{
  ngOnInit(): void {
    document.title = "BioVet 4 patas| Banho e Tosa"
  }
}
