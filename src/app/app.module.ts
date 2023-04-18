import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { FormsModule } from '@angular/forms';
import { ProductoHijoComponent } from './producto-hijo/producto-hijo.component';
import { FormularioHijoComponent } from './formulario-hijo/formulario-hijo.component';
import { ListaPadreComponent } from './lista-padre/lista-padre.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioProductosComponent,
    ProductoHijoComponent,
    FormularioHijoComponent,
    ListaPadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
