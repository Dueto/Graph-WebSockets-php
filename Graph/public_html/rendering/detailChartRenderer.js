var detailChartRenderer = function()
{
    var me = {};


    me.masterChart = new masterChartRenderer();
    me.masterChartId = '';
    me.id = '';
    me.chart = '';
    me.axis = '';
    me.series = '';
    me.divWidth = '';
    me.pointCount = '';
    me.timer = '';
    me.delta = 0;
    me.resolutionMultiplier = 0.1;
    me.zoomMultiplier = 10;
    me.tooltipX = 10;
    me.tooltipY = 35;
    me.mouseDown = 0;
    me.cloneToolTip = null;
    me.cloneToolTip2 = null;

    me.db = new dataCacher();
    me.channels = '';
    me.allChannels = '';
    me.aggregation = '';
    me.dataSourcePeriod = 10;
    me.dataSourceLevel = '';

    me.renderChart = function(id, masterChartId)
    {
        var self = this;
        self.id = id;
        self.masterChartId = masterChartId;
        self.divWidth = self.getDivWidth(id);
        self.pointCount = self.divWidth * self.resolutionMultiplier;

        var db_server = document.getElementById("db_server").value;
        var db_name = document.getElementById("db_name").value;
        var db_group = document.getElementById("db_group").value;
        var beginTime = document.getElementById("beginTime").value;
        var endTime = document.getElementById("endTime").value;
        var channelId = document.getElementById("channelid").value;
        self.aggregation = document.getElementById("aggregation").value;
        self.channels = document.getElementById("channels").value;

        var chartContainer = document.getElementById(id);
        chartContainer.addEventListener("mousewheel", self.onScrollZoom.bind(self), false);

        try
        {
            self.db.getData(db_server, db_name, db_group,
                    self.channels, beginTime + '-' + endTime,
                    self.pointCount, self.aggregation, function(obj)
                    {
                        self.dataSourceLevel = self.db.level.window;
                        if (obj === null)
                        {
                            throw 'No data in server responces';
                        }
                        else
                        {
                            var ser = [];
                            for (var i = 0; i < obj.data.length; i++)
                            {
                                var series = {data: [], name: '', pointInterval: self.dataSourceLevel * 1000};
                                series.data = (obj.data[i]).slice(0);
                                series.name = obj.label[i];
                                for (var j = 0; j < obj.data[i].length; j++)
                                {
                                    var pointData = obj.data[i][j];
                                    series.data[j] = [];
                                    series.data[j].push(parseFloat(obj.dateTime[j]) * 1000);
                                    series.data[j].push(pointData);
                                }
                                ser.push(series);
                            }
                            self.series = ser;
                            self.masterChart.setOnZoomCallback(self.onZoomMasterChartEvent.bind(self));
                            self.masterChart.renderMasterChar(masterChartId, ser[channelId]);
                            self.formChart(id, ser);
                            self.chart = $('#' + id).highcharts();
                        }

                    });
        }
        catch (ex)
        {
            console.log(ex);
        }

    };

    me.formChart = function(id, series)
    {
        var self = this;
        var title = self.formTitle();
        $('#' + id).highcharts(
                {
                    chart:
                            {
                                zoomType: 'xy',
                                events:
                                        {
                                            selection: self.onZoomEvent.bind(self)
                                        },
                                plotShadow: true,
                                animation: false

                            },
                    credits:
                            {
                                enabled: false
                            },
                    title:
                            {
                                text: title,
                                margin: 10
                            },
                    yAxis:
                            {
                            },
                    xAxis:
                            {
                                type: 'datetime'
                            },
                    legend:
                            {
                                enabled: false
                            },
                    plotOptions:
                            {
                                line:
                                        {
                                            dataLabels:
                                                    {
                                                        enabled: false,
                                                    }
                                        },
                                series:
                                        {
                                            cursor: 'pointer',
                                            point:
                                                    {
                                                        events:
                                                                {
                                                                    click: self.showLabels
                                                                }
                                                    },
                                            marker:
                                                    {
                                                        enabled: false,
                                                        states:
                                                                {
                                                                    hover:
                                                                            {
                                                                                enabled: true
                                                                            }


                                                                }
                                                    },
                                            shadow: false,
                                            states:
                                                    {
                                                        hover:
                                                                {
                                                                    lineWidth: 2
                                                                }
                                                    },
                                            threshold: null,
                                        }


                            },
                    tooltip:
                            {
                                useHTML: true,
                                enabled: false,
                                shared: true,
                                crosshairs: [{
                                        width: 1,
                                        color: 'red',
                                        dashStyle: 'longdash'
                                    }],
                                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                                valueDecimals: 8,
                                hideDelay: 0,
                                animation: false,
                                xDateformat: '%Y-%m-%d<br/>%H:%M',
                                positioner: self.tooltipPosition.bind(self)
                            },
                    series: series
                });
        /* (function(H)
         {
         H.wrap(H.Tooltip.prototype, 'refresh', function(proceed, point, e)
         {
         if (e.type !== 'mousemove' )
         {
         proceed.call(this, point, e);
         }

         });
         H.addEvent(H.Point.prototype, 'click', function(e)
         {
         e.point.series.chart.tooltip.refresh(e.point, e);
         });
         }(Highcharts));*/
    };

    me.onZoomEvent = function(event)
    {
        var self = this;
        var begTime = event.xAxis[0].min / 1000;
        var endTime = event.xAxis[0].max / 1000;
        self.refreshChart(begTime, endTime);
    };

    me.onZoomMasterChartEvent = function(event)
    {
        var self = this;
        var begTime = event.xAxis[0].min / 1000;
        var endTime = event.xAxis[0].max / 1000;
        begTime = (begTime.toString()).split('.')[0];
        endTime = (endTime.toString()).split('.')[0];
        self.refreshChartFromMasterChart(begTime, endTime);
    };



    me.refreshChart = function(beginTime, endTime)
    {
        var self = this;
        var db_server = self.db.dataHandl.getDbServer();
        var db_name = self.db.dataHandl.getDbName();
        var db_group = self.db.dataHandl.getDbGroup();
        try
        {
            self.db.getData(db_server, db_name, db_group,
                    self.channels, beginTime + '-' + endTime,
                    self.pointCount, self.aggregation, function(obj)
                    {
                        self.dataSourceLevel = self.db.level.window;
                        if (obj === null)
                        {
                            throw 'No data in server responces';
                        }
                        else
                        {
                            var ser = [];
                            for (var i = 0; i < obj.data.length; i++)
                            {
                                var series = {data: [], name: '', pointInterval: self.dataSourceLevel * 1000};
                                series.data = (obj.data[i]).slice(0);
                                series.name = obj.label[i];
                                for (var j = 0; j < obj.data[i].length; j++)
                                {
                                    var pointData = obj.data[i][j];
                                    series.data[j] = [];
                                    series.data[j].push(parseFloat(obj.dateTime[j]) * 1000);
                                    series.data[j].push(pointData);
                                }
                                ser.push(series);
                            }
                            self.series = ser;
                            for (var i = 0; i < ser.length; i++)
                            {
                                self.chart.series[i].setData(ser[i].data);
                            }
                            var title = self.formTitle();
                            self.chart.setTitle({text: title});
                            self.chart.redraw();
                            self.chart.reflow();
                        }
                    });
        }
        catch (ex)
        {
            console.log(ex);
        }
    };

    me.refreshChartFromMasterChart = function(beginTime, endTime)
    {
        var self = this;
        var db_server = self.db.dataHandl.getDbServer();
        var db_name = self.db.dataHandl.getDbName();
        var db_group = self.db.dataHandl.getDbGroup();
        try
        {
            self.db.getData(db_server, db_name, db_group,
                    self.channels, beginTime + '-' + endTime,
                    self.pointCount, self.aggregation, function(obj)
                    {
                        self.dataSourceLevel = self.db.level.window;
                        if (obj === null)
                        {
                            throw 'No data in server responces';
                        }
                        else
                        {
                            var ser = [];
                            for (var i = 0; i < obj.data.length; i++)
                            {
                                var series = {data: [], name: '', pointInterval: self.dataSourceLevel * 1000};
                                series.data = (obj.data[i]).slice(0);
                                series.name = obj.label[i];
                                for (var j = 0; j < obj.data[i].length; j++)
                                {
                                    var pointData = obj.data[i][j];
                                    series.data[j] = [];
                                    series.data[j].push(parseFloat(obj.dateTime[j]) * 1000);
                                    series.data[j].push(pointData);
                                }
                                ser.push(series);
                            }
                            self.series = ser;
                            self.chart.destroy();
                            self.formChart(self.id, ser);
                            self.chart = $('#' + self.id).highcharts();

                        }
                    });
        }
        catch (ex)
        {
            console.log(ex);
        }
    };

    me.zoomChart = function(beginTime, endTime, minvalue, maxvalue)
    {
        var self = this;
        var xAxis = self.chart.xAxis[0];
        var yAxis = self.chart.yAxis[0];
        xAxis.setExtremes(beginTime * 1000, endTime * 1000);
        //yAxis.setExtremes(minvalue, maxvalue);
        //xAxis.update();

        self.timer = setTimeout(function()
        {
            self.refreshChart(beginTime, endTime);
        }, 100);
    };

    me.onScrollZoom = function(event)
    {
        var self = this;
        clearTimeout(self.timer);
        var e = window.event || event;
        self.delta = self.delta + Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var btime = self.chart.xAxis[0].min / 1000;
        var etime = self.chart.xAxis[0].max / 1000;
        var maxvalue = self.chart.yAxis[0].max;
        var minvalue = self.chart.yAxis[0].min;
        var valuediffrence = (maxvalue - minvalue) / self.zoomMultiplier;
        var diffrence = (etime - btime) / self.zoomMultiplier;
        var begTime = btime + (diffrence * self.delta);
        var endTime = etime - (diffrence * self.delta);
        minvalue = minvalue + (valuediffrence * self.delta);
        maxvalue = maxvalue - (valuediffrence * self.delta);
        self.delta = 0;
        self.zoomChart(begTime, endTime, minvalue, maxvalue);

    };

    me.changeTooltipPosition = function(event)
    {
        var self = this;
        self.tooltipX = event.clientX;
        self.tooltipY = event.clientY;
    };

    me.tooltipPosition = function()
    {
        var self = this;
        return {x: self.tooltipX, y: self.tooltipY};
    };


    me.getDivWidth = function(id)
    {
        return document.getElementById(id).offsetWidth;
    };

    me.formTitle = function()
    {
        var self = this;
        var db_server = self.db.dataHandl.getDbServer();
        var db_name = self.db.dataHandl.getDbName();
        var db_group = self.db.dataHandl.getDbGroup();
        var level = self.db.level.window;
        var title = db_server + ' ' + db_name + ' ' + db_group + ' resolution:' + level;
        return title;
    };

    me.showLabels = function()
    {
        var self = this;
//        if (self.cloneToolTip)
//        {
//            self.chart.container.firstChild.removeChild(self.cloneToolTip);
//        }
//        if (self.cloneToolTip2)
//        {
//            self.cloneToolTip2.remove();
//        }
//        self.cloneToolTip = self.chart.tooltip.label.element.cloneNode(true);
//        self.chart.container.firstChild.appendChild(self.cloneToolTip);
//
//        self.cloneToolTip2 = $('.highcharts-tooltip').clone();
//        $(self.chart.container).append(self.cloneToolTip2);

        hs.htmlExpand(null, {
            pageOrigin: {
                x: this.pageX,
                y: this.pageY
            },
            headingText: this.series.name,
            maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                    this.y + '',
            width: 300});

    };

    me.hideLabels = function()
    {

    };

    me.getSeries = function(id)
    {

    };

    me.hideChannel = function(channelId)
    {

    };

    me.showChannel = function(channelId)
    {

    };

    me.changeZoomType = function()
    {

    };

    me.addAxises = function(axises)
    {
    };

    me.deleteAxis = function(axis)
    {
    };

    me.addAxis = function(axis)
    {

    };

    me.changeMasterChartSeries = function(seriesId)
    {

    };


    return me;





};