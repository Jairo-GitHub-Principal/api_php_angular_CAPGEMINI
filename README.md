# api_php_angular_CAPGEMINI
# Corrigindo o metodo atualizar 

### primeiro temos o template onde onde se inicia uma interação entre as ações do usuario e o backend

![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/5c184d8b-35d5-410a-a9a0-0535559c7354)
  
  
  
  ### metodo alterar de curso.component.ts da forma qeu foi implementado na video aula, porem assim como no cadastrar eu removi o this.vetor=res
  
  o metodo alterar vai chamar o metodo atualizarCurso() em curso.service.ts, e vai passar para ele o objeto curso, que tem os dados modificados que serão usados para modificar os dados no DB
  ![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/475a13e4-a213-4f7b-851e-929dd3d174ff)
  
  ### metodo atualizarCruso() arquivo curso.service.ts
  o metodo abaixo esta igual na video aula, esse metodo é chamado pelo metodo alterar() em curos.component.ts, onde ele recebes os dados 
  ja modificados pelo usuario, e enviara para a api no arquivo auterar.php , onde sera submetido à um código sql, que persistira esses dados no DB api , na tabela cursos, para alterar os dados relacionado ao id que esta sendo passado
  
  ![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/5aaa4aa0-778d-49df-bb74-ad63223db4fe)

  ### e por fim o nosso api php, que conectara ao nosso banco de dados e execultara  os codigos pre definidos para fazer a alteração no DB
  
  ![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/bd3535d7-dbb7-4b7c-a4d2-b7b5ee6d95b7)


  
  
  
