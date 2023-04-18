import { tipoProducto } from "./tipoProducto";

export class Producto {
  private _idProducto: number;
  private _nombre: string;
  private _cantidadExistencia: number;
  private _precio: number;
  private _tipoProducto: tipoProducto;

  //Constructor
  constructor(idProducto: number, nombre: string, cantidadExistencia: number, precio: number, tipoProducto: tipoProducto) {
    this._idProducto = idProducto;
    this._nombre = nombre;
    this._cantidadExistencia = cantidadExistencia;
    this._precio = precio;
    this._tipoProducto = tipoProducto;
  }

  //Métodos Getters y Setters
  public get idProducto(): number {
    return this._idProducto;
  }
  public set idProducto(value: number) {
    this._idProducto = value;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public get cantidadExistencia(): number {
    return this._cantidadExistencia;
  }
  public set cantidadExistencia(value: number) {
    this._cantidadExistencia = value;
  }

  public get precio(): number {
    return this._precio;
  }
  public set precio(value: number) {
    this._precio = value;
  }

  public get tipoProducto(): tipoProducto {
    return this._tipoProducto;
  }
  public set tipoProducto(value: tipoProducto) {
    this._tipoProducto = value;
  }

}
