import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'yonatan';
  nombreUpper: string = 'YONATAN';
  nombreCompleto: string = 'yoNaTan RtiZ carRILLo';

  fecha: Date = new Date();
}
