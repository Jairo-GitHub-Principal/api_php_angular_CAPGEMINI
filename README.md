# api_php_angular_CAPGEMINI
# Corrigindo o metodo excluir 


excluir.php metodo do php que fara a exclusão no DB
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/1470c8e3-de99-4424-88b8-c273d6dea537)

curso.ts  model
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/b2dc7386-32c4-4124-bc69-1eb6769c7a3e)


curso.service.ts metodo removerCurso, vai mandar o id para o codigo excluir od arquivo excluir.php
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/a1dbe72e-c204-4378-99bc-4af10e8ae9e9)

curso.component.ts 

metodo selecionarCurso, vai fazer a selecão do curso que sera removido, e carregar no nosso objeto curso, e assim consigiremos passar os
dados que precisamos para o metodo remover()
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/c6bace7c-d5d4-4d5a-90f9-abb815dc68d8)


metodo remover  que vai chamar o metodo removerCurso e passar para ele o idCurso que foi carregado no objeto curso atraves do 
metodo selecionar curso
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/cb8aba95-b5a5-4f5d-9c25-8dd40287a310)


template
passa os dados do curso que queremos selecionar para o metodo selecionarCurso()
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/c9f43654-18f6-4f6a-b74e-f4811fb79881)

com os dados ja selecionados o botão remover desse formulario, chama o metodo remover(), e o mesmo vai prosseguir com o envio das
informações para o metodo removerCurso
![image](https://github.com/Jairo-GitHub-Principal/api_php_angular_CAPGEMINI/assets/106206316/5de45a96-0f60-40dc-b0d3-90ba2ae4552e)




