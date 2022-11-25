import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultado } from '../../../modelos/resultado.model';
import { ResultadosService } from '../../../servicios/resultados.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  resultados : Resultado[];
  nombresColumnas: string[] = ['Candidato','Mesa','Votos','Opciones'];
  constructor(private miServicioResultados: ResultadosService,
              private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioResultados.listar().
      subscribe(data => {
        this.resultados=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/resultados/candidato/mesa/crear"]);
  }
  editar(id:string,id_candidato:string,id_mesa:string):void{
    console.log(id,id_candidato,id_mesa);
    this.router.navigate(["pages/resultados/actualizar/"+id+"/candidato/"+id_candidato+"/mesa/"+id_mesa]);

  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Resultado',
      text: "Está seguro que quiere eliminar el resultado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioResultados.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El resultado ha sido eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
