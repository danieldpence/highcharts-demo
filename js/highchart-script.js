

$(document).ready(function() {
    //Global chart options
    Highcharts.setOptions({
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                    ]
            },
            borderWidth: 2,
            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            plotShadow: true,
            plotBorderWidth: 1
        },
        lang: {
            thousandsSep: ","
        }
    });



     //unique visitors by day
     //get csv file from server and pass into highcharts constructor
    $.get('data/unqiue-visitors-by-day.csv', function(csv) {
        $('#chart-1').highcharts({
            chart: {
                type: 'line',
                zoomType: 'x'
            },
            data: {
                csv: csv
            },
            title: {
                text: 'Unique Visitors'
            },
            yAxis: {
                title: {
                    text: 'Visits'
                }
            },
            xAxis: {
                title: {
                    text: 'Date'
                }
            }
        });
    });

    //Time series area chart: top referring websites
    $.get('data/top-referring-sites.csv', function(csv) {
        $('#chart-2').highcharts({
            chart: {
                type: 'area',
                zoomType: 'x'
            },
            data: {
                csv: csv
            },
            title: {
                text: 'Top Referring Websites'
            },
            subtitle: {
                text: 'This chart allows us to view a visual comparison of the top 3 referring websites.'
            },
            yAxis: {
                title: {
                    text: 'Visits'
                }
            },
            xAxis: {
                title: {
                    text: 'Date'
                }
            }
        });
    });

    //Line Chart - Revenue: Plan vs. Actual
    $.get('data/revenue-plan-to-actual.csv', function(csv) {
        $('#chart-3').highcharts({
            chart: {
                type: 'line',
                zoomType: 'x'
            },
            data: {
                csv: csv
            },
            title: {
                text: 'Revenue Plan vs Actual'
            },
            subtitle: {
                text: 'This chart shows forecasted revenue vs actual.'
            },
            tooltip: {
                pointFormat: '<b>${point.y:,.0f}</b> USD'
            },
            yAxis: {
                title: {
                    text: 'Gross Revenue ($US)'
                }
            },
            xAxis: {
                title: {
                    text: 'Month'
                }
            }
        });
    });

    //Waterfall or Bridge Style
    $(function() {
        $('#chart-4').highcharts({
            chart: {
                type: 'waterfall'
            },

            title: {
                text: 'Q1 2015 Bridge'
            },

            xAxis: {
                type: 'category'
            },

            yAxis: {
                title: {
                    text: 'USD'
                }
            },

            legend: {
                enabled: false
            },

            tooltip: {
                pointFormat: '<b>${point.y:,.0f}</b> USD'
            },

            series: [{
                upColor: '#29E823',
                color: '#F70000',
                data: [{
                    name: 'Beginning Balance',
                    y: 120000
                }, {
                    name: 'Revenue From X',
                    y: 569000
                }, {
                    name: 'Revenue From Y',
                    y: 231000
                }, {
                    name: 'Total Revenue',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }, {
                    name: 'Fixed Costs',
                    y: -342000
                }, {
                    name: 'Variable Costs',
                    y: -233000
                }, {
                    name: 'Ending Balance',
                    isSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        textShadow: '0px 0px 3px black'
                    }
                },
                pointPadding: 0
            }]
        });
    });
    
    
});