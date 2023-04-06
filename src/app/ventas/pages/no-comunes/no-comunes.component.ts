import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombres: string[] = ['Yonatan', 'Jazmin'];
  nombre: string = this.nombres[0];
  generos: string[] = ['masculino', 'femenino'];
  genero: string = this.generos[0];

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientes: string[] = ['uno', 'dos', 'tres', 'cuatro'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    '=3': 'tenemos 3 clientes esperando.',
    other: 'tenemos muchos clientes esperando.',
  };

  cambiarNombre() {
    if (this.genero === 'masculino') {
      this.nombre = this.nombres[1];
      this.genero = this.generos[1];
      return;
    }

    this.nombre = this.nombres[0];
    this.genero = this.generos[0];
  }

  eliminarCliente() {
    if (this.clientes.length === 0) {
      return;
    }
    this.clientes.pop();
  }
}
