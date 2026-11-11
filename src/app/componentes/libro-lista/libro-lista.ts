import { Component, computed, inject, signal } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';
import { Libro } from '../../modelos/libro';
import { LIBROS } from '../../datos/libros';
import { LibroService } from '../../services/libro-service';

@Component({
  imports: [LibroCard],
  selector: 'app-libro-lista',
  styleUrl: './libro-lista.css',
  templateUrl: './libro-lista.html',
})
export class LibroLista {
  // Injectar LibroService
  private libroService = inject(LibroService);

  protected libros = signal<Libro[]>([]);
  protected borrador = signal(''); // lo que se escribe
  protected terminoBusqueda = signal(''); // lo que buscar al hacer click en buscar
  protected mensaje = signal<string|null>(null);
  protected cargando = signal(true);

  constructor(){
    this.cargar();
  }
  
  private cargar():void {
    this.cargando.set(true);
    this.libroService.listar(this.terminoBusqueda()).subscribe((librosServicio) =>{
      this.libros.set(librosServicio);
      this.cargando.set(false);
    });
  }

  protected alEscribir(evento:Event):void {
    this.borrador.set((evento.target as HTMLInputElement).value)
  }

  protected alBuscar():void {
    this.terminoBusqueda.set(this.borrador().trim());
    this.cargar();
  }

  protected alSolicitar(libro:Libro):void {
    this.libroService.descontarCopia(libro.id).subscribe(() => {
      // emitir un mensaje
      this.mensaje.set(`Solicitaste «${libro.titulo}».`);
      this.cargar();
    });
  }
}
