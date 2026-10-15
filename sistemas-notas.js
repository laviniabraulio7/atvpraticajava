const nome = "Lavínia";
const idade = 17;
const curso = "Desenvolvimento de sistemas";
const nota1 = 8;
const nota2 = 9;
const nota3 = 7;
const faltas = 4;
const matriculado = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Faltas:", faltas);
console.log("Matriculado:", matriculado);

const media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media);

let situacao;
if (media >= 7) {
  situacao = "Aprovado";
} 

else if (media >= 5) {
  situacao = "Recuperação";
} 

else {
  situacao = "Reprovado";
}

console.log("Situação:", situacao);

const aulasFrequentadas = 40 - faltas;
const frequencia = (aulasFrequentadas / 40) * 100;

console.log("Frequência:", frequencia + "%");

if (frequencia >= 75) {
  console.log("Atingiu a frequência mínima");
} 

else {
  console.log("Não atingiu a frequência mínima");
}

let resultado;
if (media >= 7 && frequencia >= 75 && matriculado === true) {
  resultado = "Aprovado nos critérios finais";
} else {
  resultado = "Reprovado nos critérios finais";
}

console.log("Resultado final:", resultado);

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Média:", media);
console.log("Frequência:", frequencia + "%");
console.log("Situação:", situacao);
console.log("Resultado final:", resultado);