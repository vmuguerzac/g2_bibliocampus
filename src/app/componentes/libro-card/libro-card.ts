import { Component, computed, input, signal } from '@angular/core';
import { Libro } from '../../modelos/libro';

@Component({
  imports: [],
  selector: 'app-libro-card',
  styleUrl: './libro-card.css',
  templateUrl: './libro-card.html',
})
export class LibroCard {
  libro = input.required<Libro>();

  protected agotado = computed(()=> this.libro().copiasDisponibles === 0);
  protected etiqueta = computed(() =>
      this.agotado() ? 'Agotado':
                  `Disponible - ${this.libro().copiasDisponibles} ${this.libro().copiasDisponibles === 1?'copia':'copias'}`

  );

  protected alSolicitar():void {
    this.libro().copiasDisponibles -- ;
  }

}