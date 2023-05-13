import { HttpClient } from '@angular/common/http';
import { Component, enableProdMode, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  // vetor cursos
  vetor: Curso[] = [];
  // objeto:
  curso = new Curso();

  constructor(private curso_Service: CursoService) { }

  ngOnInit(): void {

    this.selecao();


  }


  cadastro() {

    this.curso_Service.cadastrarCurso(this.curso).subscribe(
      (res: Curso) => {
        this.curso.nomeCurso = ""; // limpa o campo nome na pagina de cadastro
        this.curso.valorCurso = 0;// limpa o campo valor 
        // enableProdMode();
        this.selecao(); // atualiza a lista exibida no navegador
      }
    )
  }

  



  selecao() {

    this.curso_Service.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }
  selecionarCurso(c: Curso) {
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

  alterar(){
    console.log("chego em curso.component.ts: "+JSON.stringify(this.curso));
    this.curso_Service.atualizarCurso(this.curso).subscribe(
      (res)=>{
      
        
       
        // limpar os valores
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        // atualizar a listagem
        this.selecao();

      }
    )
  }


  remover() {
    this.curso_Service.removerCurso(this.curso.idCurso).subscribe(
      (res: Curso) => {
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;
        this.selecao();
      }
    )
  }

}
