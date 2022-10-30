import { Component, OnInit } from '@angular/core';
import { ExperienciaL } from 'src/app/model/experiencia-l';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: ExperienciaL[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
   islogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.islogged = true;
    }else{ 
      this.islogged = false;
    }
  }
  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data =>{this.expe = data});
  }
  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo borrar la experiencia")
        }
      )
    }
  }

}
