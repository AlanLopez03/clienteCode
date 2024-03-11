import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ControlComponent } from './components/control/control.component';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MostrarProductosComponent } from './components/mostrar-productos/mostrar-productos.component';
import { AdminBarComponent } from './components/admin-bar/admin-bar.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { UsuarioComprasComponent } from './components/usuario-compras/usuario-compras.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    RegistrarUsuarioComponent,
    InventarioComponent,
    ControlComponent,
    ModificarUsuarioComponent,
    NavigationComponent,
    FooterComponent,
    CarritoComponent,
    MostrarProductosComponent,
    AdminBarComponent,
    ReportesComponent,
    PedidosComponent,
    UsuarioComprasComponent,

    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
