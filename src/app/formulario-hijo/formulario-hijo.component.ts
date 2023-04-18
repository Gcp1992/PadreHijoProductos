import { Component } from '@angular/core';
//Importamos esta instrucción en el formulario hijo:
import { Output, EventEmitter } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent {
  //Creación Array pedidos:
  pedidos: Pedido[]=[];
  //Hacemos una instancia:
  pedido:Pedido=new Pedido(0,0,"",0,0);

  @Output() envioDatos = new EventEmitter<Pedido[]>();



  incluirPedido(){
    //Añadimos al array nuestra instancia creada
    this.pedidos.push(this.pedido);
    //Añadimos esta instrucción enviando como parámetro nuestro Array:
    this.envioDatos.emit(this.pedidos);
    //Instanciamos otro pedido para no pisar
    this.pedido=new Pedido(0,0,"",0,0);
  }


}
