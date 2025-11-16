const STUDENT_NAME = "PABLO";

document.getElementById('greetBtn').addEventListener('click', () => {
  const nombre = STUDENT_NAME && STUDENT_NAME.trim() !== "" ? STUDENT_NAME : "estudiante";
  alert(`Hola ${nombre}`);
});
