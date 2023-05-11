import { enableProdMode, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';
map

@Injectable({
  providedIn: 'root'
})
export class CursoService implements OnInit {
 
  url = "http://localhost:80/api/php/";
  
  vetor:Curso[]=[];

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
   
  }

   // cadastrar curso
  
   cadastrarCurso(c:Curso):Observable<Curso>{ // recebe como parametro um objeto do tipo Curso
      
    return this.http.post<Curso>(this.url+'cadastrar.php',c)
           }
     
 // remover dados "curso"

 
 removerCurso (id:any):Observable<Curso>{
  const url = `${this.url}excluir?idCurso=${id}`;
  console.log(url); // testar se o id esta indo na url
     return this.http.delete<Curso>(url);
      
  }



  // listar curso
  obterCursos():Observable<Curso[]>{   
    return this.http.get(this.url+"listar")   
    .pipe( map((res:any) =>{  //tipar o res com any  
       this.vetor = res; // remover o res['curso']
       return this.vetor;
      }))
    }

   


 
}


/**
 *  removerCurso (c:Curso):Observable<Curso[]> {
  const parametros =  new HttpParams().set('idCurso',c.idCurso.toString());
 
  console.log(parametros.toString())
  return this.http.delete<Curso>(this.url+'excluir',{params:parametros})
  .pipe(map((res)=>{
    const filtro = this.vetor.filter((cursos)=>{
      return cursos['idCurso'] !== c.idCurso;
    });
    return this.vetor=filtro;
  }))
}
 * 
 * 
 */