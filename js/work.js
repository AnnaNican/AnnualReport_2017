var canvas = document.getElementById('workChart');
var option = {
    responsive: true,
    legend: {
                display: 'true'
            },
    animation: {
                animateRotate: true,
                animateScale: true
            },
    gridLines: {
        color: "rgba(255,255,255, 0.2)"
    }
};


var data = {
  labels: ["Mail&Schedule","Software Development","Learning","Design&Composition", "Web Distractions"],
  datasets: [{
    data: [478, 442, 141, 97, 238],
    backgroundColor: ["#AE4891", "#C2699E","#D290AC","#FEAFBB","#FEF7ED"],
    borderColor: "rgba(255,255,255, 0.2)",
    hoverBackgroundColor: "rgba(255,255,255, 0.4)"
  }]
};
 


var polarAreaChart = new Chart(canvas, {
    type: 'polarArea',
    data: data,
    options: option
});