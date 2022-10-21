import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  num: number = 0;
  aleatorio: number = 0;
  texto: string ="";

  constructor() { }

  ngOnInit() {
    var min = 0;
    var max = 100;
    this.aleatorio = Math.floor(Math.random()*(max-min+1)+min);
    console.log (this.aleatorio);
    return this.aleatorio;
  }

  onClick() {
    
    console.log("Botón pulsado");
    if (this.num != this.aleatorio) {
      if (0 < this.num && this.num > 100) {
        this.texto = "Introduce un número entre 0 y 100";
      } else if (this.num > this.aleatorio) {
        this.texto = "Introduce un número menor";
      } else {
        this.texto = "Introduce un número mayor";
      } 
    }else {
      this.texto = "Has acertado";
    } 
  }
}
