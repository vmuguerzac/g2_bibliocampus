import { Service } from '@angular/core';
import { Libro } from '../modelos/libro';
import { LIBROS } from '../datos/libros';
import { delay, Observable, of } from 'rxjs';

@Service()
export class LibroService {
    // Copia de trabajo de los libros
    private libros:Libro[] = LIBROS.map((l)=>({...l}));

    constructor(){
        console.log("LibroService Creado");
    }

    // listar libros y usar el parametro para filtrarlos
    listar(termino:string = ''):Observable<Libro[]> {
        const temp = termino.toLocaleLowerCase();

        const lista =  this.libros.filter(
        (l) => !temp || 
                l.titulo.toLowerCase().includes(temp) ||
                l.autor.toLowerCase().includes(temp)
        );
        return of(lista);
    }

    // Descontar la copia
    descontarCopia(idADescontar:number):Observable<void> {
        this.libros = this.libros.map((l) => 
            l.id === idADescontar ? {...l, copiasDisponibles: l.copiasDisponibles -1 }:l,
        )
        return of(undefined);
    }

}
