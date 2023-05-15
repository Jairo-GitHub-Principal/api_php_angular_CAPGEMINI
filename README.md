# api_php_angular_CAPGEMINI
# Corrigindo o metodo atualizar 

### primeiro temos o template onde onde se inicia uma interação entre as ações do usuario e o backend

![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/5c184d8b-35d5-410a-a9a0-0535559c7354)
  
  
  
  ### metodo alterar de curso.component.ts da forma qeu foi implementado na video aula, porem assim como no cadastrar eu removi o this.vetor=res
  
  o metodo alterar vai chamar o metodo atualizarCurso() em curso.service.ts, e vai passar para ele o objeto curso, que tem os dados modificados que serão usados para modificar os dados no DB
  ![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/475a13e4-a213-4f7b-851e-929dd3d174ff)
  
  ### metodo atualizarCurso() arquivo curso.service.ts
  o metodo abaixo esta igual na video aula, esse metodo é chamado pelo metodo alterar() em curos.component.ts, onde ele recebes os dados 
  ja modificados pelo usuario, e enviara para a api no arquivo auterar.php , onde sera submetido à um código sql, que persistira esses dados no DB api , na tabela cursos, para alterar os dados relacionado ao id que esta sendo passado
  
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/90e9226b-c1db-4cf1-87d4-ef71657b9be7)

  ### e por fim a nosso api php, que conectara ao nosso banco de dados e execultara  os codigos pre definidos para fazer a alteração no DB
  para fazer com que funcionasse a alteração de dados, foi feito na api no arfquivo cadastrar, um converção dos dados extraido do JSON
  uma vez que tudo chegava como string, e o DB, precisava de dados do tipo int e decimal, então foi feito a seguinte modificação:
  
             isso                                              para isso
  $idCurso=$extrair->idCurso;                     $idCurso=(int)$extrair->idCurso;
  $nomeCurso=$extrair->nomeCurso;                      $nomeCurso=$extrair->nomeCurso;
  $valorCurso=$extrair->valorCurso;             $valorCurso=(float)$extrair->valorCurso;
  tudo que chegava aqui era string              
  
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/864ab877-0000-4682-80d0-5249af5d856e)

abaixo segue o erro que acontecia antes da correção

![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/b0ed3eeb-c35e-4e60-b9aa-de699077de76)

  abaixo segue o passo a passo do projeto para o crud no DB com angular php e mysql
  [Api_Angular_php.pdf](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/files/11482377/Api_Angular_php.pdf)

  
