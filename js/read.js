var canvas = document.getElementById('readChart');
var data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Books Read per Month",
            backgroundColor: "rgba(255,255,255, 0.1)",
            borderColor: "rgb(255,255,255)",
            borderWidth: 2,
            hoverBackgroundColor: "rgb(255,255,255)",
            hoverBorderColor: "rgb(255,255,255)",
            data: [3, 4, 1, 4, 7, 4, 4, 7, 3, 7, 3, 5],
            gridLines.offsetGridLines: false
        }
    ]
};
var option = {
	scales: {
  	yAxes:[{
    		stacked:true,
        gridLines: {
        	display:true,
          color:"rgb(255,255,255)"
        }
    }],
    xAxes:[{
    		gridLines: {
        	display:false
        }
    }]
  }
};

var myBarChart = Chart.Bar(canvas,{
	data:data,
  options:option
});