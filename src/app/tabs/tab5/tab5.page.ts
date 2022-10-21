import { Component, OnInit } from '@angular/core';

interface IValor {
  imagen: string; 
  url : string;
}
  
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  valoresLista: IValor[] = [
    {
      imagen: "/assets/img/BIRT_LOGO.png",
      url: "http://www.birt.eus",
    },
    {
      imagen: "/assets/img/easo_logo.png",
      url: "http://www.easo.hezkuntza.net",
    },
    {
      imagen: "/assets/img/nicolas_larburu_logo.jpg",
      url: "http://www.nlarburu.hezkuntza.net",
    },
    {
      imagen: "/assets/img/ciudad_jardin_logo.png",
      url: "http://www.ciudadjardin.hezkuntza.net",
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
