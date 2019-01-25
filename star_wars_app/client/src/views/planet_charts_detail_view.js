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
            ['Kamino', 1000],
            ['Corellia', 3000],
            ['Ord Mantell', 4000],
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
            name: 'Other Species',
            y: 1
        }]
    }]
});

mainDiv.appendChild(secondChart);



const thirdChart = document.createElement('div');
thirdChart.id = 'thirdChart';



Highcharts.chart(thirdChart, {
    series: [{
        type: 'venn',
        data: [{
            sets: ['A'],
            value: 500,
            name: 'Coruscant, Population: 1 trillion',
            description: 'A city-covered planet, Coruscant is the vibrant heart and capital of the galaxy, featuring a diverse mix of citizens and culture. It features towering skyscrapers, streams of speeder-filled air traffic, and inner levels that stretch far below the world’s surface. Coruscant was the seat of government for the Galactic Republic and the Empire that followed, and was the site of numerous historic events during the Clone Wars. It also housed the Jedi Temple and Archives, which hosted Jedi training and learning for over a thousand generations -- traditions that ended when the planet bore witness to Order 66.'
        }, {
            sets: ['B'],
            value: 1,
            name: 'Alderaan, Population: 2 billion',
            description: 'If ever one needed an example of the irredeemable evil that was the Empire, turn to the shattered remains of Alderaan. An influential world, Alderaan was represented in the waning days of the Republic by such venerated politicians as Bail Antilles and Bail Organa. A peaceful world, Alderaan was bereft of weaponry in an era of galactic strife. It was not without spirit, however. Alderaan was one of the earliest supporters of the Alliance to Restore the Republic, though its officials prudently kept all ties to the Rebellion secret. Despite such discretion, the Empire knew it to be a haven of Rebel activity, and Grand Moff Tarkin targeted the beautiful world for reprisal as soon as the Death Star was operational. The massive primary weapon of the battle station obliterated Alderaan, leaving only a lifeless asteroid field behind.'
        }, {
            sets: ['A', 'B'],
            value: 1
        }]
    }],
    tooltip: {
        headerFormat:
            '<span style="color:{point.color}">\u2022</span> ' +
            '<span style="font-size: 14px"> {point.point.name}</span><br/>',
        pointFormat: '{point.description}<br><span style="font-size: 10px"></span>'
    },
    title: {
        text: 'Relationship between populations of Coruscant and Alderaan'
    }
});

mainDiv.appendChild(thirdChart);



}

module.exports = PlanetChartsDetailView;
