 document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => element.textContent = '');

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }
      const regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
  const palabras = nombre.split(' ').filter(p => p.length > 0);
  if (nombre && (!regexNombre.test(nombre) || palabras.length < 2)) {
    document.getElementById('error-nombre').textContent = 'Por favor, ingresa tu nombre y apellido (solo letras).';
    formularioValido = false;
  }

  // NUEVA VALIDACIÓN 2: Teléfono exacto de 10 dígitos (Formato México/LATAM común)
  const regexTelefono = /^\d{10}$/;
  if (!telefono) {
    document.getElementById('error-telefono').textContent = 'El teléfono es obligatorio.';
    formularioValido = false;
  } else if (!regexTelefono.test(telefono)) {
    document.getElementById('error-telefono').textContent = 'El teléfono debe tener exactamente 10 números.';
    formularioValido = false;
  }

  // Validación de Intereses (Mínimo uno seleccionado)
  if (intereses.length === 0) {
    document.getElementById('error-intereses').textContent = 'Debes seleccionar al menos un interés.';
    formularioValido = false;
  }

  // Validación de Horario
  if (!horario) {
    document.getElementById('error-horario').textContent = 'Debes seleccionar un horario preferido.';
    formularioValido = false;
  }

  // NUEVA VALIDACIÓN 3: Fecha del evento (No permitir fechas pasadas)
  if (!fecha) {
    document.getElementById('error-fecha').textContent = 'La fecha es obligatoria.';
    formularioValido = false;
  } else {
    const fechaSeleccionada = new Date(fecha + 'T00:00:00'); // Evita desfase de zona horaria
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); // Dejamos solo año, mes y día de hoy

    if (fechaSeleccionada < fechaActual) {
      document.getElementById('error-fecha').textContent = 'La fecha no puede ser anterior al día de hoy.';
      formularioValido = false;
    }
  }

    //Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});