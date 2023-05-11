<?php
// incluir a conexão
include("conexao.php");
$obterDados = file_get_contents("php://input");

$extrair =json_decode($obterDados);
// separar dados

$idCurso = $extrair -> idCurso;

//query sql

$sql = "DELETE  FROM `cursos` WHERE idCurso = $idCurso";

// Executar a conexão e a pesquiso do sql
$executar = mysqli_query($conexao,$sql);

?>