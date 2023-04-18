import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { FormsModule } from '@angular/forms';
import { ProductoHijoComponent } from './producto-hijo/producto-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioProductosComponent,
    ProductoHijoComponent
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
