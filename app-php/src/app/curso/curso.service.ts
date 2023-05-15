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
      
    console.log(this.url+'cadastrar.php',c);
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

   

// atualizar curso

atualizarCurso(c:Curso):Observable<Curso[]>{
  console.log("chego em curso.service.ts: "+c.idCurso);
  
  // execultar alteração via url
 
  return this.http.put(this.url+'alterar.php/',c)
    // percorrer o vetor para saber qual é o id do curso alterado para saber quem tem que ser alterado
  .pipe(map((res)=>{
      const cursoAlterado = this.vetor.find((item)=>{
      return  item['idCurso'] === + ['idCurso'];
    });
    // alterar o valor do vetor local
        if(cursoAlterado){
          cursoAlterado['nomeCurso']= c['nomeCurso'];
          cursoAlterado['valorCurso']= c['valorCurso'];
        }
        
        return this.vetor;
        
  }))
    
}
 
}

 


/**
 
atualizarCurso(c:Curso):Observable<Curso[]>{
  console.log("chego em curso.service.ts: "+ c.idCurso);
  // execultar alteração via url
  const url = `${this.url}alterar?${JSON.stringify(c)}`;
  return this.http.put(url +'alterar',JSON.stringify(c))
    // percorrer o vetor para saber qual é o id do curso alterado para saber quem tem que ser alterado
  .pipe(map((res)=>{
      const cursoAlterado = this.vetor.find((item)=>{
      return  item['idCurso'] === + ['idCurso'];
    });
    // alterar o valor do vetor local
        if(cursoAlterado){
          cursoAlterado['nomeCurso']= c['nomeCurso'];
          cursoAlterado['valorCurso']= c['valorCurso'];
        }
        return this.vetor;
  }))
}
 
 * 
 */