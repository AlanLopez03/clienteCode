import { Component,OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario/inventario.service';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { Categoria } from '../../models/categoria';
import { Material } from '../../models/material';
import { Marca } from '../../models/marca';
import { MaterialService } from '../../services/material/material.service';
import { MarcaService } from '../../services/marca/marca.service';
import { CorreoService } from '../../services/correo/correo.service';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import Swal from 'sweetalert2'
import { data } from 'jquery';

declare var $: any;

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {

  idProducto = Number;
  categoria: Categoria = new Categoria();
  categorias: Categoria[] = [];
  material: Material = new Material();
  materiales: Material[] = [];
  marca: Marca = new Marca();
  marcas: Marca[] = [];
  producto = new Producto();
  productos: Producto[] = [];
  usuario = new Usuario();
  usuarios: Usuario[] = [];
  fecha = String;
  pageSize = 5;
  p = 1;

  constructor(private usuarioService: UsuarioService,private inventarioService: InventarioService, private categoriaService: CategoriaService, private materialService: MaterialService, private marcaService: MarcaService, private router: Router, private correoService:CorreoService) { }
  ngOnInit(): void {
    this.producto = new Producto();
    $(document).ready(function () {
      $('.dropdown-trigger').dropdown();
      $('.modal').modal();
      $('.datepicker').datepicker({
        format: 'yyyy-mm-dd'
      });
      $('#descuento').prop('checked', false);
      $('#inicio_descuento').prop('disabled', true);
      $('#fin_descuento').prop('disabled', true);
      $('#name1').prop('disabled', true);
    });

    this.inventarioService.list().subscribe((resProductos: any) => {
      this.productos = resProductos;
      for (let i = 0; i < this.productos.length; i++) {
        let aux = new Date(this.productos[i].inicio_descuento);
        let aux2 = new Date(this.productos[i].fin_descuento);
        this.productos[i].inicio_descuento = aux.toLocaleDateString()
        this.productos[i].fin_descuento = aux2.toLocaleDateString()
      }


    }, err => console.log(err));

    this.categoriaService.list().subscribe((resCategorias: any) => {
      this.categorias = resCategorias;
    }, err => console.log(err));

    this.materialService.list().subscribe((resMateriales: any) => {
      this.materiales = resMateriales;
    }, err => console.log(err));

    this.marcaService.list().subscribe((resMarcas: any) => {
      this.marcas = resMarcas;
    }, err => console.log(err));
  }

  enviarOfertas()
  {
    this.usuarioService.list().subscribe((resUsuario: any) =>
      {
        this.usuarios = resUsuario;
      },err => console.error(err));

    for (let i = 0; i < this.usuarios.length; i++)
      {
        this.usuario.correo = this.usuarios[i].correo;
        //console.log ("Productos: ", this.productos[i].nombre);
        this.correoService.enviarCorreoOfertas(this.productos,this.usuarios[i].correo).subscribe((resUsuario: any) =>
          {
            console.log(resUsuario) ;
          },err => console.error(err));
      }
    
  }
}