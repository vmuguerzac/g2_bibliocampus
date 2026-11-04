import { Component, signal } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';

@Component({
  imports: [LibroCard],
  selector: 'app-libro-lista',
  styleUrl: './libro-lista.css',
  templateUrl: './libro-lista.html',
})
export class LibroLista {
  protected borrador = signal(''); // lo que se escribe
  protected terminoBusqueda = signal(''); // lo que buscar al hacer click en buscar

  protected alEscribir(evento:Event):void {
    this.borrador.set(
      (evento.target as HTMLInputElement).value
    )
  }

  protected alBuscar():void {
    this.terminoBusqueda.set(this.borrador().trim());
  }
}
