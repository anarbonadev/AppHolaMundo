import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // INTERPOLATION
  nombre = 'Tomás';

  // PROPERTY BINDING
  textoPlaceHolder = 'Escriba algo aquí';
  deshabilitado = true;
  imgSrc =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png';

  // EVENT BINDING
  texto = 'Esto es un video sobre event binding';

  // TWO WAY DATABINDING
  texto1 = '';

  constructor() {
    // INTERPOLACIÓN
    setInterval(() => (this.nombre = 'Javier'), 3000);

    // PROPERTY BINDING
    setInterval(() => (this.deshabilitado = false), 3000);
  }

  // INTERPOLATION
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

  // EVENT BINDING
  cambiarTexto(): void {
    this.texto = 'En el próximo video vamos a ver Two Way Databinding';
  }
}
