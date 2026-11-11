import { Libro } from "./libro";

export interface Prestamo {
    id:number;
    libroId:number;
    usuarioId:number;
    fecha:string; // 'dd/mm/yyyy'
    estado: 'ACTIVO' | 'DEVUELTO';
    libro?:Libro | null;

}