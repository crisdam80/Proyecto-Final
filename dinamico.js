function mostrarEducacion() {
    let listaEducacion = document.getElementById("lista-educacion");
    let botonEducacion = document.querySelector("button[onclick='mostrarEducacion()']");

    if (listaEducacion.style.display === "none" || listaEducacion.style.display === "") {
      listaEducacion.style.display = "block";
      botonEducacion.textContent = "Cerrar Educacion"; 
    } else {
      listaEducacion.style.display = "none";
      botonEducacion.textContent = "Mostrar Educacion";
    }
  }
  
  function mostrarExperiencia() {
    let listaExperiencia = document.getElementById("lista-experiencia");
    let botonExperiencia = document.querySelector("button[onclick='mostrarExperiencia()']");

    if (listaExperiencia.style.display === "none" || listaExperiencia.style.display === "") {
      listaExperiencia.style.display = "block";
      botonExperiencia.textContent = "Cerrar Experiencia"; 
    } else {
      listaExperiencia.style.display = "none";
      botonExperiencia.textContent = "Mostrar Experiencia"; 
    }
  }
  
 
  
  function mostrarHabilidades() {
    let listaHabilidades = document.getElementById("lista-habilidades");
    let botonHabilidades = document.querySelector("button[onclick='mostrarHabilidades()']");
  
    if (listaHabilidades.style.display === "none" || listaHabilidades.style.display === "") {
      listaHabilidades.style.display = "block";
      botonHabilidades.textContent = "Cerrar Habilidades"; // Cambiar el texto del botón
    } else {
      listaHabilidades.style.display = "none";
      botonHabilidades.textContent = "Mostrar Habilidades"; // Cambiar el texto del botón de nuevo
    }
  }