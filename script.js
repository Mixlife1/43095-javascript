function calcularNotaFinal() {
  const estudiantes = [];

  function Estudiante(nombre, notaSemestre1, notaSemestre2) {
    this.nombre = nombre;
    this.notaSemestre1 = parseFloat(notaSemestre1);
    this.notaSemestre2 = parseFloat(notaSemestre2);
    this.notaFinal = (this.notaSemestre1 * 0.6) + (this.notaSemestre2 * 0.4);
  }

  function agregarEstudiante() {
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const notaSemestre1 = parseFloat(prompt("Ingrese la nota del primer semestre :"));
    const notaSemestre2 = parseFloat(prompt("Ingrese la nota del segundo semestre :"));

    const estudiante = new Estudiante(nombre, notaSemestre1, notaSemestre2);
    estudiantes.push(estudiante);

    alert(`El estudiante ${nombre} ha sido agregado correctamente.`);
  }

  function mostrarNotasEstudiantes() {
    if (estudiantes.length === 0) {
      alert("No hay estudiantes registrados.");
      return;
    }

    let resultado = "Notas de los estudiantes:\n\n";

    estudiantes.forEach(function(estudiante, indice) {
      resultado += `Estudiante ${indice + 1}:\n`;
      resultado += `Nombre: ${estudiante.nombre}\n`;
      resultado += `Nota del primer semestre: ${estudiante.notaSemestre1}\n`;
      resultado += `Nota del segundo semestre: ${estudiante.notaSemestre2}\n`;
      resultado += `Nota final: ${estudiante.notaFinal.toFixed(2)}\n\n`;
    });

    alert(resultado);
  }

  return {
    agregarEstudiante,
    mostrarNotasEstudiantes
  };
}

const calculadoraNotas = calcularNotaFinal();

calculadoraNotas.agregarEstudiante();
calculadoraNotas.agregarEstudiante();
calculadoraNotas.mostrarNotasEstudiantes();
