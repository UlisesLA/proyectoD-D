document.addEventListener('DOMContentLoaded', function() {
    fetch('transfondos.json')
      .then(response => response.json())
      .then(data => {
        const select = document.getElementById('transfondo');
        data.transfondos.forEach(t => {
          let option = new Option(t.nombre, t.nombre);
          select.add(option);
        });
      })
      .catch(error => console.error('Error al cargar los transfondos:', error));
  });

  