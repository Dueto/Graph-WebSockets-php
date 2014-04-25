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
    me.initialBeginTime = '';
    me.initialEndTime = '';
    me.onDraggingLeft = 80;
    me.onDraggingRigth = 0;
    me.dragData = null;

    me.previousState = null;

    me.db = new dataCacher('websockets', true, true, false, true);
    me.dataSources = [];
    me.currentDataSource = 0;
    me.allChannels = '';
    me.dataSourcePeriod = 10;
    me.dataSourceLevel = '';

    me.renderChart = function(id, masterChartId)
    {
        var self = this;
        self.id = id;
        self.masterChartId = masterChartId;
        self.divWidth = self.getDivWidth(id);
        self.pointCount = self.divWidth * self.resolutionMultiplier;
        self.onDraggingRigth = self.divWidth - self.onDraggingLeft;

        var dataSource = {};

        dataSource.db_server = document.getElementById("db_server").value;
        dataSource.db_name = document.getElementById("db_name").value;
        dataSource.db_group = document.getElementById("db_group").value;
        var beginTime = self.initialBeginTime = document.getElementById("beginTime").value;
        var endTime = self.initialEndTime = document.getElementById("endTime").value;
        var channelId = document.getElementById("channelid").value;
        dataSource.aggregation = document.getElementById("aggregation").value;
        dataSource.channels = document.getElementById("channels").value;

        self.dataSources = [];
        self.dataSources.push(dataSource);

        self.bindEvents();

        self.series = [];
        self.formChart(id, self.series);
        self.chart = $('#' + id).highcharts();
        self.masterChart.setOnZoomCallback(self.onZoomMasterChartEvent.bind(self));
        try
        {
            for (var i = 0; i < self.dataSources.length; i++)
            {
                self.db.getData(self.dataSources[i].db_server, self.dataSources[i].db_name, self.dataSources[i].db_group,
                        self.dataSources[i].channels, beginTime + '-' + endTime,
                        self.pointCount, self.dataSources[i].aggregation, function(obj)
                {
                    self.dataSourceLevel = self.db.level.window;
                    if (obj === null)
                    {
                        alert('No data in server responces.');
                        console.log('No data in server responces');
                    }
                    else
                    {
                        for (var i = 0; i < obj.data.length; i++)
                        {
                            var series = {data: [], name: '', pointInterval: self.dataSourceLevel * 1000};
                            series.data = (obj.data[i]);
                            series.name = obj.label[i];
                            for (var j = 0; j < obj.data[i].length; j++)
                            {
                                var pointData = obj.data[i][j];
                                series.data[j] = [];
                                series.data[j].push(parseFloat(obj.dateTime[j]) * 1000);
                                series.data[j].push(pointData);
                            }
                            self.addSeries(series, true);
                            if ((self.series.length - 1) === parseInt(channelId))
                            {
                                self.masterChart.renderMasterChar(masterChartId, self.series[channelId]);
                            }
                        }
                    }

                });
            }
        }
        catch (ex)
        {
            console.log(ex);
        }

    };

    me.formChart = function(id, series, yAxises)
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
                                animation: false,
                                marginRight: self.onDraggingLeft

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
                                enabled: true,
                                itemHiddenStyle:
                                        {
                                            color: '#000000',
                                            fontWeight: 'normal'
                                        },
                                itemStyle:
                                        {
                                            color: '#000000',
                                            fontWeight: 'bold'
                                        },
                                layout: 'vertical',
                                symbolHeight: 20
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
        if (event.xAxis)
        {
            var begTime = event.xAxis[0].min / 1000;
            var endTime = event.xAxis[0].max / 1000;
            self.refreshChart(begTime, endTime);
        }
        else
        {
            self.refreshChart(self.initialBeginTime, self.initialEndTime);
        }

    };

    me.onZoomMasterChartEvent = function(event)
    {
        var self = this;
        var begTime = event.xAxis[0].min / 1000;
        var endTime = event.xAxis[0].max / 1000;
        begTime = (begTime.toString()).split('.')[0];
        endTime = (endTime.toString()).split('.')[0];
        self.initialBeginTime = begTime;
        self.initialEndTime = endTime;
        self.refreshChartFromMasterChart(begTime, endTime);
    };



    me.refreshZoomSeries = function(beginTime, endTime)
    {
        var self = this;
        var beginTime1 = beginTime - (endTime - beginTime);
        var endTime1 = endTime + (endTime - beginTime);
        try
        {

            self.db.getData(self.dataSources[self.currentDataSource].db_server, self.dataSources[self.currentDataSource].db_name, self.dataSources[self.currentDataSource].db_group,
                    self.dataSources[self.currentDataSource].channels, beginTime1 + '-' + endTime1,
                    self.pointCount, self.dataSources[self.currentDataSource].aggregation, function(obj)
            {
                self.dataSourceLevel = self.db.level.window;
                if (obj === null)
                {
                    alert('No data in server responces.');
                    throw 'No data in server responces';
                }
                else
                {
                    for (var i = 0; i < obj.data.length; i++)
                    {
                        var series = {data: [], name: '', pointInterval: self.dataSourceLevel * 1000};
                        series.data = (obj.data[i]);
                        series.name = obj.label[i];
                        for (var j = 0; j < obj.data[i].length; j++)
                        {
                            var pointData = obj.data[i][j];
                            series.data[j] = [];
                            series.data[j].push(parseFloat(obj.dateTime[j]) * 1000);
                            series.data[j].push(pointData);
                        }
                        self.series.push(series);
                    }
                    self.currentDataSource++;
                    self.refreshChart(beginTime, endTime);

                }
            });

        }
        catch (ex)
        {
            console.log(ex);
        }
    };

    me.refreshChart = function(beginTime, endTime)
    {
        var self = this;
        if (self.currentDataSource === 0)
        {
            self.series = [];
            self.refreshZoomSeries(beginTime, endTime);
        }
        else if (self.currentDataSource !== self.dataSources.length)
        {
            self.refreshZoomSeries(beginTime, endTime);
        }
        else
        {
            var title = self.formTitle();
            self.chart.setTitle({text: title});
            for (var i = 0; i < self.series.length; i++)
            {
                self.chart.series[i].setData(self.series[i].data);
            }
            var xAxis = self.chart.xAxis[0];
            xAxis.setExtremes(beginTime * 1000, endTime * 1000);
            self.chart.redraw();
            self.currentDataSource = 0;
        }
    };

    me.refreshSeries = function(beginTime, endTime)
    {
        var self = this;
        try
        {
            self.db.getData(self.dataSources[self.currentDataSource].db_server, self.dataSources[self.currentDataSource].db_name, self.dataSources[self.currentDataSource].db_group,
                    self.dataSources[self.currentDataSource].channels, beginTime + '-' + endTime,
                    self.pointCount, self.dataSources[self.currentDataSource].aggregation, function(obj)
            {
                self.dataSourceLevel = self.db.level.window;
                if (obj === null)
                {
                    alert('No data in server responces.');
                    console.log('No data in server responces');
                }
                else
                {
                    var ser = [];
                    for (var i = 0; i < obj.data.length; i++)
                    {
                        var series = {data: [], name: '', pointInterval: self.dataSourceLevel * 1000};
                        series.data = (obj.data[i]);
                        series.name = obj.label[i];
                        for (var j = 0; j < obj.data[i].length; j++)
                        {
                            var pointData = obj.data[i][j];
                            series.data[j] = [];
                            series.data[j].push(parseFloat(obj.dateTime[j]) * 1000);
                            series.data[j].push(pointData);
                        }
                        self.addSeries(series, false);
                    }
                    self.currentDataSource++;
                    self.refreshChartFromMasterChart(beginTime, endTime);
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
        if (self.currentDataSource === 0)
        {
            self.series = [];
            self.chart.destroy();
            self.formChart(self.id, []);
            self.chart = $('#' + self.id).highcharts();
            self.refreshSeries(beginTime, endTime);
        }
        else if (self.currentDataSource !== self.dataSources.length)
        {
            self.refreshSeries(beginTime, endTime);
        }
        else
        {
            self.chart.redraw();
            self.currentDataSource = 0;
        }
    };

    me.zoomChart = function(beginTime, endTime, refreshAfterTimeOut)
    {
        var self = this;
        var xAxis = self.chart.xAxis[0];
        var yAxis = self.chart.yAxis[0];
        xAxis.setExtremes(beginTime * 1000, endTime * 1000);
//        var maxvalue = self.chart.yAxis[0].max;
//        var minvalue = self.chart.yAxis[0].min;
//        yAxis.setExtremes(minvalue + (self.delta * minvalue / 5), maxvalue - (self.delta * minvalue / 5));
//         xAxis.update();

        if (refreshAfterTimeOut)
        {
            self.timer = setTimeout(function()
            {
                self.refreshChart(beginTime, endTime);
            }, 100);
        }
    };

    me.onScrollZoom = function(event)
    {
        var self = this;
        clearTimeout(self.timer);
        var e = window.event || event;
        self.delta = self.delta + Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var btime = self.chart.xAxis[0].min / 1000;
        var etime = self.chart.xAxis[0].max / 1000;
        var diffrence = (etime - btime) / self.zoomMultiplier;
        var begTime = btime + (diffrence * self.delta);
        var endTime = etime - (diffrence * self.delta);
        self.delta = 0;
        self.zoomChart(begTime, endTime, true);

    };

    me.bindEvents = function()
    {
        var self = this;
        var chartContainer = document.getElementById(self.id);
        chartContainer.addEventListener("mousewheel" || "WheelEvent", self.onScrollZoom.bind(self), false);
        chartContainer.addEventListener('mousedown', self.startDrag.bind(self), false);
        chartContainer.addEventListener('mousemove', self.drag.bind(self), false);
        document.body.addEventListener('mouseup', self.stopDrag.bind(self), false);
//        var draggabaleContainer = document.getElementById("draggabaleZone");
//        draggabaleContainer.addEventListener("mousemove", function(e)
//        {
//            var left = e.pageX - draggabaleContainer.offset().left;
//            if ((left >= 0 && left <= self.onDraggingLeft) || (left >= self.onDraggingRigth && left <= self.divWidth))
//            {
//
//            }
//        }, false);
    };

    me.changeTooltipPosition = function(event)
    {
        var self = this;
        self.tooltipX = event.clientX;
        self.tooltipY = event.clientY;

    };

    me.startDrag = function(event)
    {
        var self = this;
        var chartContainer = document.getElementById(self.id);
        if (!self.dragData)
        {
            var e = event || event;
            var left = e.clientX - chartContainer.offsetLeft;
            if ((left >= 0 && left <= self.onDraggingLeft) || (left >= self.onDraggingRigth && left <= self.divWidth))
            {
                document.body.style.cursor = "move";
                self.dragData =
                        {
                            x: e.clientX - chartContainer.offsetLeft,
                            y: e.clientY - chartContainer.offsetTop
                        };
            }

        }
    };

    me.drag = function(event)
    {
        var self = this;

        if (self.dragData)
        {
            var e = event || event;
            var diff;
            var btime;
            var etime;

            if (self.dragData.x > self.onDraggingLeft)
            {
                diff = self.previousState - e.clientX;
            }
            else
            {
                diff = e.clientX - self.previousState;
            }
            var multiplier = (self.chart.xAxis[0].max / 1000 - self.chart.xAxis[0].min / 1000) / self.divWidth / self.zoomMultiplier / 2;
            if (diff < 0)
            {
                btime = self.chart.xAxis[0].min / 1000 + (e.clientX - self.dragData.x) * multiplier;
                etime = self.chart.xAxis[0].max / 1000 + (e.clientX - self.dragData.x) * multiplier;
            }
            else
            {
                btime = self.chart.xAxis[0].min / 1000 - (e.clientX - self.dragData.x) * multiplier;
                etime = self.chart.xAxis[0].max / 1000 - (e.clientX - self.dragData.x) * multiplier;
            }
            self.previousState = e.clientX;
            self.zoomChart(btime, etime, false);

        }
    };

    me.stopDrag = function(event)
    {
        var self = this;
        if (self.dragData)
        {
            var btime = self.chart.xAxis[0].min / 1000;
            var etime = self.chart.xAxis[0].max / 1000;
            document.body.style.cursor = "default";
            self.refreshChart(btime, etime);
            self.dragData = null;
        }
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
        var title = '';
        for (var i = 0; i < self.dataSources.length; i++)
        {
            var db_server = self.dataSources[i].db_server;
            var db_name = self.dataSources[i].db_name;
            var db_group = self.dataSources[i].db_group;
            var level = self.db.level.window;
            title = title + db_server + ' ' + db_name + ' ' + db_group + ' resolution:' + level + ' ';
        }
        return title;
    };

    me.showLabels = function(e)
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

//        hs.htmlExpand(null, {
//            pageOrigin: {
//                x: this.pageX,
//                y: this.pageY
//            },
//            headingText: this.series.name,
//            maincontentText: /*Highcharts.dateFormat('%Y-%m-%d<br/>%H:%M:%S', this.x)*/ this.x + '<br/> ' +
//                    this.y + '',
//            width: 300});

        var message = '<table class="message" id="message' + this.x + '" style="border:1px solid #666!important;">';
        //message = message + '<caption>'+ point.series.name +'</caption>';
        message = message + '<tbody>';
        message = message + '<tr><th>Point</th><td class="num">' + Highcharts.dateFormat('%Y-%m-%d<br/>%H:%M:%S', this.x) + '</td></tr>';
        message = message + '<tr><th>Value</th><td class="num">' + this.y + '</td></tr>';

        var msg = '<div class="dialog">Point: ' + Highcharts.dateFormat('%Y-%m-%d<br/>%H:%M:%S', this.x) + '</br>Value: ' + this.y + '</div>';

        $(msg).dialog({
            dialogClass: 'dailog',
            title: this.series.name,
            position: [e.clientX + 10, e.clientY + 10],
            closeText: 'Close',
            width: 'auto',
            maxWidth: 1000,
            height: 'auto',
            close: function() {
                $('#message' + this.x).remove();
            }
        });

    };

    me.formDataSources = function(dataSource)
    {
        var self = this;
        if (self.dataSources.length === 0)
        {
            self.dataSources.push(dataSource);
        }
        else
        {
            var flag = false;
            for (var i = 0; i < self.dataSources.length; i++)
            {
                if (self.dataSources[i].db_server === dataSource.db_server &&
                        self.dataSources[i].db_name === dataSource.db_name &&
                        self.dataSources[i].db_group === dataSource.db_group &&
                        self.dataSources[i].aggregation === dataSource.aggregation)

                {
                    flag = true;
                    self.dataSources[i].channels = dataSource.channels;
                    break;
                }
            }
            if (!flag)
            {
                self.dataSources.push(dataSource);
            }
        }

    };

    me.hideLabels = function()
    {

    };

    me.getSeries = function(id)
    {
        return this.series[id];
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

    me.deleteAxis = function(axis)
    {
    };

    me.addAxis = function(axis)
    {
        this.chart.addAxis(axis, false, false);

    };

    me.changeMasterChartSeries = function(seriesId)
    {
        if (seriesId > this.series.length)
        {
            return;
        }
        this.masterChart.renderMasterChar(this.masterChartId, this.series[seriesId]);
    };

    me.addSeries = function(series, isRedraw)
    {
        this.series.push(series);
        this.chart.addSeries(series, isRedraw);
    };

    me.addDataSource = function()
    {
        var dataSource = {};
        dataSource.db_server = document.getElementById("db_server").value;
        dataSource.db_name = document.getElementById("db_name").value;
        dataSource.db_group = document.getElementById("db_group").value;
        dataSource.aggregation = document.getElementById("aggregation").value;
        dataSource.channels = document.getElementById("channels").value;
        var beginTime = this.initialBeginTime = document.getElementById("beginTime").value;
        var endTime = this.initialEndTime = document.getElementById("endTime").value;

        this.formDataSources(dataSource);
        this.refreshChartFromMasterChart(beginTime, endTime);



    };


    return me;





};