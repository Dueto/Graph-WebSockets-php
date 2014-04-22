var masterChartRenderer = function()
{
    var me = {};

    me.id = '';
    me.zoomCallback = '';
    me.series = {};

    me.renderMasterChar = function(id, series)
    {
        var self = this;
        self.id = id;
        self.series.data = [];
        for (var i = 0; i < series.data.length; i++)
        {
            self.series.data.push(series.data[i].slice(0));
        }
        self.series.name = series.name;
        self.series.pointInterval = series.pointInterval;
        $('#' + id).highcharts(
                {
                    chart:
                            {
                                reflow: false,
                                borderWidth: 0,
                                backgroundColor: null,
                                marginLeft: 55,
                                marginRight: 5,
                                zoomType: 'x',
                                events:
                                        {
                                            selection: function(event)
                                            {
                                                var extremesObject = event.xAxis[0],
                                                        min = extremesObject.min,
                                                        max = extremesObject.max,
                                                        xAxis = this.xAxis[0];

                                                xAxis.removePlotBand('mask-before');
                                                xAxis.addPlotBand({
                                                    id: 'mask-before',
                                                    from: series.data[0][0],
                                                    to: min,
                                                    color: 'rgba(0, 0, 0, 0.2)'
                                                });

                                                xAxis.removePlotBand('mask-after');
                                                xAxis.addPlotBand({
                                                    id: 'mask-after',
                                                    from: max,
                                                    to: series.data[series.data.length - 1][0],
                                                    color: 'rgba(0, 0, 0, 0.2)'
                                                });

                                                self.zoomCallback(event);
                                                return false;
                                            }
                                        }

                            },
                    title:
                            {
                                text: null
                            },
                    credits:
                            {
                                enabled: false
                            },
                    yAxis:
                            {
                                gridLineWidth: 0,
                                labels:
                                        {
                                            enabled: false
                                        },
                                title:
                                        {
                                            text: null
                                        },
                                showFirstLabel: false
                            },
                    xAxis:
                            {
                                type: 'datetime'
                            },
                    tooltip:
                            {
                                formatter: function()
                                {
                                    return false;
                                }
                            },
                    legend:
                            {
                                enabled: false
                            },
                    plotOptions:
                            {
                                series:
                                        {
                                            fillColor:
                                                    {
                                                        linearGradient: [0, 0, 0, 70],
                                                        stops: [
                                                            [0, '#4572A7'],
                                                            [1, 'rgba(0,0,0,0)']
                                                        ]
                                                    },
                                            lineWidth: 1,
                                            marker:
                                                    {
                                                        enabled: false
                                                    },
                                            shadow: false,
                                            states:
                                                    {
                                                        hover:
                                                                {
                                                                    lineWidth: 1
                                                                }
                                                    },
                                            enableMouseTracking: false
                                        }
                            },
                    series: [series]
                });
    };

    me.setOnZoomCallback = function(zoomCallback)
    {
        this.zoomCallback = zoomCallback;
    };

    me.onSelectionCallback = function(event)
    {
        /*var self = this;
         var chart = $('#' + self.id).highcharts();
         var extremesObject = event.xAxis[0]
         var xAxis = chart.xAxis[0];
         var min = extremesObject.min;
         var max = extremesObject.max;
         xAxis.removePlotBand('mask-before');
         xAxis.addPlotBand({
         id: 'mask-before',
         from: Date.UTC(2006, 0, 1),
         to: min,
         color: 'rgba(0, 0, 0, 0.2)'
         });

         xAxis.removePlotBand('mask-after');
         xAxis.addPlotBand({
         id: 'mask-after',
         from: max,
         to: Date.UTC(2008, 11, 31),
         color: 'rgba(0, 0, 0, 0.2)'
         });*/
    };

    me.changeSeries = function(series)
    {

    };

    return me;



};