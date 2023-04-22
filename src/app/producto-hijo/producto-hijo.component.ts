import { Component, Input } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { tipoProducto } from '../_modelo/tipoProducto';

@Component({
  selector: 'app-producto-hijo',
  templateUrl: './producto-hijo.component.html',
  styleUrls: ['./producto-hijo.component.css']
})
export class ProductoHijoComponent {
  /*Debemos indicar en el componente hijo que debe estar preparado para recibir los identificadores
  nuevos asignados en el padre*/
  @Input() productoLista:Producto;
  @Input() iterador:number;
}
