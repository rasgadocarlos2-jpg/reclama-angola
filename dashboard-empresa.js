new Chart(trustChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [{
      data: [3.8, 4.0, 4.1, 4.3],
      borderColor: '#0b3c5d',
      fill: false
    }]
  }
});

new Chart(statusChart, {
  type: 'doughnut',
  data: {
    labels: ['Resolvidas', 'Respondidas', 'Abertas'],
    datasets: [{
      data: [12, 5, 3],
      backgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c']
    }]
  }
});

new Chart(slaChart, {
  type: 'bar',
  data: {
    labels: ['Esta Empresa', 'Média Plataforma'],
    datasets: [{
      data: [36, 52],
      backgroundColor: ['#0b3c5d', '#cbd5e1']
    }]
  }
});

new Chart(volumeChart, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [{
      data: [2, 6, 4, 8],
      backgroundColor: '#93c5fd'
    }]
  }
});
