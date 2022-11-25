import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol.model';
import { RolesService } from '../../../servicios/roles.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_rol: string = "";
  intentoEnvio: boolean = false;
  elRol: Rol = {
    nombre: "",
    descripcion: ""
  }
  constructor(private miServicioRoles: RolesService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_rol) {
      this.modoCreacion = false;
      this.id_rol = this.rutaActiva.snapshot.params.id_rol;
      this.getRol(this.id_rol)
    } else {
      this.modoCreacion = true;
    }
  }
  getRol(id: string) {
    this.miServicioRoles.getRol(id).
      subscribe(data => {
        this.elRol = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioRoles.crear(this.elRol).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El rol ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/roles/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioRoles.editar(this.elRol._id, this.elRol).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El rol ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/roles/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elRol.nombre=="" || 
       this.elRol.descripcion==""){
        
      return false;
    }else{
      return true;
    }
  }
}
