<?php

// incluir conexão: entre os parentese estamos chamando o arquivo conexao.php
include("conexao.php")// pode se dizer que aqui estamos fazendo uma importação do arquivo de conexão, para ter acesso ao codigo que de fato fara a conexão

// obtendo dados via url
$idCurso=$_GET["idCurso"];
alert($idCurso);
// comando Sql
$sql = "DELETE FROM cursos WHERE idCurso = $idCurso";

// Executar a conexão e a pesquiso do sql
$executar = mysqli_query($conexao,$sql);
?>