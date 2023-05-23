let ts = [];
let da = [];

function addChart(){
	let blabla = localStorage.getItem('productsInCart');
	blac = JSON.parse(blabla);
	keyss = Object.keys(blac);
	for (let i=0; i < keyss.length; i++) {
	ts.push(blac[keyss[i]].tag);
	da.push(blac[keyss[i]].inCart);
}
}	
	
function pieChart() {
	addChart();

    document.querySelector("#chartReport").innerHTML = '<canvas id="myChart"></canvas>';

    let oilCanvas = document.getElementById("myChart");
    
    let oilData = {
        labels: ts,
        datasets: [
            {
                data: da,
                backgroundColor: [
                    "#FF6384",
                    "#63FF84",
                    "#84FF63",
                    "#8463FF",
                    "#6384FF"
                ]

            }]
    };

    let pieChart = new Chart(oilCanvas, {
        type: 'pie',
        data: oilData
    });
ts.length=0;
da.length=0;
}


function barChart() {
    document.querySelector("#chartReport").innerHTML = '<canvas id="myChart"></canvas>';
    let popCanvas = document.getElementById("myChart");
addChart();
    let barChart = new Chart(popCanvas, {
        type: 'bar',
        data: {
            labels: ts,
            datasets: [{
                label: 'Count',
                data: da,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ]
            }]
        }
    });
ts.length=0;
da.length=0;
}

/*function bubleChart(){
    document.querySelector("#chartReport").innerHTML = '<canvas id="myChart"></canvas>';
     let speedCanvas = document.getElementById("myChart");
addChart();


var speedData = {
	
  labels: ts,
  datasets: [{
    label: "Car Speed",
    data: da,
    lineTension: 0,
    fill: false,
    borderColor: 'orange',
    backgroundColor: 'transparent',
    pointBorderColor: 'orange',
    pointBackgroundColor: 'rgba(255,150,0,0.5)',
    borderDash: [5, 5],
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded'
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        color: "black"
      },
      scaleLabel: {
        display: true,
        labelString: "Time in Seconds",
        fontColor: "red"
      }
    }],
    yAxes: [{
      gridLines: {
        color: "black",
        borderDash: [2, 5],
      },
      scaleLabel: {
        display: true,
        labelString: "Speed in Miles per Hour",
        fontColor: "green"
      }
    }]
  }
};


   let bubbleChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
    });
	ts.length=0;
da.length=0;
}*/
function bubleChart(){
	document.querySelector("#chartReport").innerHTML = '<canvas id="myChart"></canvas>';
var densityCanvas = document.getElementById("myChart");
addChart();



var densityData = {
	
  label: 'Density',
  data:  da,
  backgroundColor: [
    'rgba(0, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(240, 99, 132, 0.6)'
  ],
  borderColor: [
    'rgba(0, 99, 132, 1)',
    'rgba(30, 99, 132, 1)',
    'rgba(60, 99, 132, 1)',
    'rgba(90, 99, 132, 1)',
    'rgba(120, 99, 132, 1)',
    'rgba(150, 99, 132, 1)',
    'rgba(180, 99, 132, 1)',
    'rgba(210, 99, 132, 1)',
    'rgba(240, 99, 132, 1)'
  ],
  borderWidth: 2,
  hoverBorderWidth: 0
};

var chartOptions = {
  scales: {
    yAxes: [{
      barPercentage: 0.5,
      gridLines: {
        display: false
      }
    }],
    xAxes: [{
      gridLines: {
        zeroLineColor: "black",
        zeroLineWidth: 2
      },
      ticks: {
        min: 0,
        max: 6500,
        stepSize: 1300
      },
      scaleLabel: {
        display: true,
        labelString: "Density in kg/m3"
      }
    }]
  },
  elements: {
    rectangle: {
      borderSkipped: 'left',
    }
  }
};

var bubleChart = new Chart(densityCanvas, {
  type: 'line',
  data: {
    labels: ts,
    datasets: [densityData],
  },
  options: chartOptions
});
	ts.length=0;
da.length=0;
}

function selectChanged(value) {

    switch (value) {

        case '1':

            pieChart();

            break;
            

        case '2':

            barChart();

            break;

            case '3':

                bubleChart();
    
                break;

    }

   

};


