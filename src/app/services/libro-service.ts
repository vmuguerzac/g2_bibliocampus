import { inject, Service } from '@angular/core';
import { Libro } from '../modelos/libro';
import { LIBROS } from '../datos/libros';
import { delay, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {API_URL} from '../api';

@Service() // Tambien aparece como @Injectable({ providedIn: 'root' })
export class LibroService {
    // Copia de trabajo de los libros
    private libros:Libro[] = LIBROS.map((l)=>({...l}));
    private http = inject(HttpClient);

    constructor(){
        console.log("LibroService Creado");
    }

    // listar libros y usar el parametro para filtrarlos
    listar(termino:string = ''):Observable<Libro[]> {
        let params = new HttpParams();
        const temp = termino.toLocaleLowerCase();
        
        if(temp){
            params = params.set('q', temp);
        }

        return this.http.get<Libro[]>(`${API_URL}/libros`, {params});
    }

    obtener(id:number):Observable<Libro>{
        return this.http.get<Libro>(`${API_URL}/libros/${id}`);
    }

    // Descontar la copia
    descontarCopia(idADescontar:number):Observable<void> {
        this.libros = this.libros.map((l) => 
            l.id === idADescontar ? {...l, copiasDisponibles: l.copiasDisponibles -1 }:l,
        )
        return of(undefined);
    }

}
