<?php

include("conexao.php");

$idCurso=json_decode( $_GET["idCurso"]);



// comando Sql
$sql = "DELETE FROM cursos WHERE idCurso = $idCurso";

// Executar a conexão e a pesquiso do sql
$executar = mysqli_query($conexao,$sql);
?>