new Chart(document.getElementById("climbChart"), {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"],
    datasets: [{ 
        data: [11,1,2,9,11,7, 6, 0, 7, 8, 4, 0],
        label: "Spinning",
        borderColor: "#C1A0CC",
        fill: false
      }, { 
        data: [0,0,0,3,9, 7, 4, 0, 8, 9, 3, 12],
        label: "Running",
        borderColor: "#9C7497",
        fill: false
      }, { 
        data: [13,6,4,8,23, 14, 15, 5, 16, 18, 10, 0],
        label: "Indoor Training",
        borderColor: "#8C4E8F",
        fill: false
      }, { 
        data: [5,6,10,16,1, 0, 4, 6, 0, 1, 2, 0],
        label: "Mounteneering",
        borderColor: "#624A7A",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      fill: true,
    }
  }
});