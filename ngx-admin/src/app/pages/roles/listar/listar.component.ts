import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol.model';
import { RolesService } from '../../../servicios/roles.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  roles : Rol[];
  nombresColumnas: string[] = ['Nombre','Descripcion','Opciones'];
  constructor(private miServicioRoles: RolesService,
              private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioRoles.listar().
      subscribe(data => {
      this.roles=data;  
    });
  }
  agregar():void{
    this.router.navigate(["pages/roles/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/roles/actualizar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Rol',
      text: "Está seguro que quiere eliminar el rol?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioRoles.eliminar(id).
        subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El rol ha sido eliminado correctamente',
            'success'
          )
          this.ngOnInit();
        })
      }
    })
  }

}
