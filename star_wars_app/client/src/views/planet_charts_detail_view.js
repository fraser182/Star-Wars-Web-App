const PlanetChartsDetailView = function(){

};

PlanetChartsDetailView.prototype.createPlanetChartsDetail = function(){

const mainDiv = document.querySelector('#main-info-container')

Highcharts.chart(mainDiv, {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Most Populated Planets in the Galaxy'
    },
    subtitle: {
        text: 'excluding Coruscant (Pop: 1 trillion)'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Alderaan', 2000],
            ['Naboo', 4500],
            ['Kamino', 1000]

        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});


const secondChart = document.createElement('div');
secondChart.id = 'secondChart';

Highcharts.chart(secondChart, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Population breakdown of Naboo'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Population',
        colorByPoint: true,
        data: [{
            name: 'Gungan (Native)',
            y: 72,
            sliced: true,
            selected: true
        }, {
            name: 'Human',
            y: 27
        }, {
            name: 'Other Specis',
            y: 1
        }]
    }]
});

mainDiv.appendChild(secondChart);


}

module.exports = PlanetChartsDetailView;
