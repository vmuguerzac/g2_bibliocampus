import { Component, computed, signal } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';
import { Libro } from '../../modelos/libro';
import { LIBROS } from '../../datos/libros';

@Component({
  imports: [LibroCard],
  selector: 'app-libro-lista',
  styleUrl: './libro-lista.css',
  templateUrl: './libro-lista.html',
})
export class LibroLista {
  protected libros = signal<Libro[]>(LIBROS);
  protected borrador = signal(''); // lo que se escribe
  protected terminoBusqueda = signal(''); // lo que buscar al hacer click en buscar
  protected mensaje = signal<string|null>(null);

  protected librosVisibles = computed(() => {
    const temp = this.terminoBusqueda().toLocaleLowerCase();
    return this.libros().filter(
      (l) => !temp || 
             l.titulo.toLowerCase().includes(temp) ||
             l.autor.toLowerCase().includes(temp)
    )
  });

  protected alEscribir(evento:Event):void {
    this.borrador.set((evento.target as HTMLInputElement).value)
  }

  protected alBuscar():void {
    this.terminoBusqueda.set(this.borrador().trim());
  }

  protected alSolictiar(libro:Libro):void {
    // Actualizacion es inmutable
    this.libros.update((lista)=>
      lista.map((l) => 
        l.id === libro.id ? {...l, copiasDisponibles: l.copiasDisponibles -1 }:l,
      )
    );
    // emitir un mensaje
    this.mensaje.set(`Solicitaste «${libro.titulo}».`);
  }
}
