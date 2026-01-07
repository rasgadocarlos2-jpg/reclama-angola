new Chart(statusChart, {
  type: 'doughnut',
  data: {
    labels: ['Em análise', 'Respondidas', 'Resolvidas'],
    datasets: [{
      data: [2, 1, 3],
      backgroundColor: ['#facc15', '#38bdf8', '#22c55e']
    }]
  }
});

new Chart(historyChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [{
      label: 'Reclamações',
      data: [1, 2, 1, 2],
      borderColor: '#0b3c5d',
      fill: false
    }]
  }
});
