import { Component } from '@angular/core';
import { Color, IHeroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  isMayus: boolean = true;

  order = '';

  heroes: IHeroe[] = [
    {
      nombre: 'Ironman',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Capitan America',
      vuela: false,
      color: Color.rojo,
    },
  ];

  btnMayus() {
    this.isMayus = !this.isMayus;
  }

  cambiarOrder(valor: string) {
    this.order = valor;
  }
}
