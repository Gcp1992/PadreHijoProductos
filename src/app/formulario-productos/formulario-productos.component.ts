import { Component } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { tipoProducto } from '../_modelo/tipoProducto';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent {
  //Array productos de tipo Productos
  productos:Producto[]=[
    //Instancio un objeto de tipo Producto como prueba
    //new Producto(1,"Patatas",20,5,1)
  ];

  //Map
  //Object: clase padre
  opciones: string[] = Object.values(tipoProducto).map((v,i,arr)=> v as string);

  cuadroId:number=0;
  cuadroNombre:string="";
  cuadroCantidad:number=0;
  cuadroPrecio:number=0;
  cuadroTipo: tipoProducto=tipoProducto.Alimentos;

  introduceProducto(){
    //Almacenamos un objeto de tipo Producto t le pasamos los valores creados en la clase desde el formulario:
    //Almacenamos esta información en el Array productos
    let miProducto:Producto=new Producto(this.cuadroId, this.cuadroNombre, this.cuadroCantidad, this.cuadroPrecio, this.cuadroTipo);
    //Guardamos en el Array empleados el empleado que acabamos de instanciar con push
    this.productos.push(miProducto);
  }
}
