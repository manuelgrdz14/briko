
var data = {
    labels: ['While', 'For', 'Tipos de datos', 'Motores', 'Leds', 'Graficos'],
    series: [
        [89, 74, 81, 57, 97, 85]
    ]
};

var options = {
    height: 300
};


new Chartist.Line('.ct-chart', data, options);