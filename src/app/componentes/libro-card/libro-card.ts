import { Component, computed, input, output, signal } from '@angular/core';
import { Libro } from '../../modelos/libro';

@Component({
  imports: [],
  selector: 'app-libro-card',
  styleUrl: './libro-card.css',
  templateUrl: './libro-card.html',
})
export class LibroCard {
  libro = input.required<Libro>(); // comunicacion Padre -> hijo
  prestamoSolicitado = output<Libro>(); // comunicacion Hijo -> Padre

  protected agotado = computed(()=> this.libro().copiasDisponibles === 0);
  protected etiqueta = computed(() =>
      this.agotado() ? 'Agotado':
                  `Disponible - ${this.libro().copiasDisponibles} ${this.libro().copiasDisponibles === 1?'copia':'copias'}`

  );

  protected alSolicitar():void { // al hacer click se llama a esta funcion
    this.prestamoSolicitado.emit(this.libro());
  }

}