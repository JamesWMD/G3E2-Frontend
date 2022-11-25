import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permiso_Rol } from '../../../modelos/permiso-rol.model';
import { Permisos_RolesService } from '../../../servicios/permisos-roles.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  permisos_roles : Permiso_Rol[];
  nombresColumnas: string[] = ['Rol','Permiso','Opciones'];
  constructor(private miServicioPermisos_Roles: Permisos_RolesService,
              private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioPermisos_Roles.listar().
      subscribe(data => {
        this.permisos_roles=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/permisos_roles/rol/permiso/crear"]);
  }
  editar(id:string,id_rol:string,id_permiso:string):void{
    console.log(id,id_rol,id_permiso);
    this.router.navigate(["pages/permisos-roles/actualizar/"+id+"/rol/"+id_rol+"/permiso/"+id_permiso]);

  }

  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar PermisoRol',
      text: "Está seguro que quiere eliminar el permiso_rol?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPermisos_Roles.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El permiso_rol ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
