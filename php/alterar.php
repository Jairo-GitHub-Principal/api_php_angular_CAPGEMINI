<?php
// incluir a conexão
include("conexao.php");
$obterDados = file_get_contents("php://input");

$extrair = json_decode($obterDados);
// separar dados
$idCurso = $extrair->idCurso;
$nomeCurso = $extrair->nomeCurso;
$valorCurso=$extrair->valorCurso;

//query sql
$sql = "UPDATE `curso` SET nomeCurso ='$nomeCurso', valorCurso = $valorCurso WHERE idCurso = $idCurso";

// Executar a conexão e a pesquiso do sql
$executar = mysqli_query($conexao,$sql);

// vetor para exportar os daos cadastrado
$curso=[
    'idCurso'=> $idCurso,
    'nomeCurso' => $nomeCurso,
    'valorCurso'=> $valorCurso
];

// incapsular em um json
echo(json_encode(['dados'=>$curso]));

?>