import { Component } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-lista-padre',
  templateUrl: './lista-padre.component.html',
  styleUrls: ['./lista-padre.component.css']
})
export class ListaPadreComponent {
  //En el padre me creo el Array vacío que va a recibir los datos del hijo como atributo
  arrayPedidosPadre:Pedido[]=[];

  //Definimos esta función y el evento es un Array de pedidos que va a pisar al padre
  recibirPedidoDelHijo(pedidohijo:Pedido[]){
    this.arrayPedidosPadre=pedidohijo;
  }
}
