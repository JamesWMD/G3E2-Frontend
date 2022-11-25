import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permiso_Rol } from '../../../modelos/permiso-rol.model';
import { Permisos_RolesService } from '../../../servicios/permisos-roles.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_Permiso_Rol: string = "";
  
  intentoEnvio: boolean = false;
  elPermiso_Rol: Permiso_Rol = {
    rol: "",
    permiso: ""  
  }
  constructor(private miServicioPermisos_Roles: Permisos_RolesService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_rol) {
      this.modoCreacion = false;
      this.id_Permiso_Rol = this.rutaActiva.snapshot.params.id;

      this.getPermiso_Rol(this.id_Permiso_Rol)
      
    } else {
      this.modoCreacion = true;
    }
  }
  getPermiso_Rol(id: string) {
    this.miServicioPermisos_Roles.getPermiso_Rol(id).
      subscribe(data => {
        this.elPermiso_Rol = data;
        console.log(this.elPermiso_Rol.rol)
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioPermisos_Roles.crear(this.elPermiso_Rol).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El permiso_rol ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/permisos_roles/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;

    if (this.validarDatosCompletos()) {
      this.miServicioPermisos_Roles.editar(this.elPermiso_Rol._id,this.elPermiso_Rol.rol,this.elPermiso_Rol.permiso,this.elPermiso_Rol).
      
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El permiso_rol ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/permisos_roles/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elPermiso_Rol==""    
       ){
        
      return false;
    }else{
      return true;
    }
  }
}
