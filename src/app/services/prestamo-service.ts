import { computed, inject, Service, signal } from '@angular/core';
import { LibroService } from './libro-service';
import { Prestamo } from '../modelos/prestamo';
import { Observable, tap } from 'rxjs';
import { Libro } from '../modelos/libro';

@Service()
export class PrestamoService {
    private libroService = inject(LibroService);

    // el estado solo se manejara por funciones será privado
    private _prestamos = signal<Prestamo[]>([]);

    // los componentes solo van a poder acceder a versiones de lectura
    readonly prestamos = this._prestamos.asReadonly();
    readonly activos = computed(()=> this._prestamos().filter((pres) => pres.estado === 'ACTIVO').length);

    // Version local de solicitar
    solicitar(libro:Libro):Observable<void> {
        return this.libroService.descontarCopia(libro.id).pipe(
            tap(()=> {
                this._prestamos.update((lista) => [
                    ...lista,
                    {
                        id: Date.now(),
                        libroId: libro.id,
                        usuarioId: 1,
                        fecha: new Date().toLocaleDateString(),
                        estado: 'ACTIVO',
                        libro
                    },
                ])
            })
        );
    }
}
