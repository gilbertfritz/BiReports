function ReportChart(queryname, instanceName){

    var chartdiv;
    var msgtag;
    var chartname;
    //var compositeId;
    var displayOptions;
    var preparedData;
    var ctx;
    var chartJsInst;
    var barChartOptions = {legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"><%=datasets[i].label%></span><%if(datasets[i].label){%><%}%></li><%}%></ul>"};

    var qnSplit = queryname.split("_");
    chartname = qnSplit[2];
    displayOptions = qnSplit[3];

    //public
    this.appendDiv = function(parent){
        msgtag = $('<p id="msg' + queryname + '">Loading...</p>');
        chartdiv = $('<div id="div_' + queryname + '" class="chartcanvas"><h3>' + chartname + '</h3></div>');
        chartdiv.append(msgtag);
        $(parent).append(chartdiv);
    }
    
    this.displayBarChartData = function(results){
        preparedData = prepareBarChartData(results);
        if( typeof preparedData === "string"){
            console.log(preparedData);
            msgtag.text(preparedData);
            return;
        }        
        drawBarChart();
    }

    //private
    function drawBarChart(){
        console.log(chartdiv);
        msgtag.hide();
        chartdiv.append('<button id="redraw_' + queryname + '" style="visibility:hidden">Redraw</button>');
        chartdiv.append('<div id="legend_' + queryname + '"></div>');
        chartdiv.append('<canvas id="canvas_' + queryname + '"></canvas>');
        ctx = $("#canvas_" + queryname).get(0).getContext("2d");
        redrawChart();
        var legend = chartJsInst.generateLegend();
        $("#legend_" + queryname).html(legend);
        $("#redraw_" + queryname).click(function(){
            redrawChart();
        });
    }

    function redrawChart(){
        ctx.clearRect ( 0 , 0 , ctx.canvas.width, ctx.canvas.height );
        ctx.canvas.width = window.innerWidth * 0.8;
        ctx.canvas.height = window.innerHeight * 0.4;
        chartJsInst = new Chart(ctx).Bar(preparedData, barChartOptions);
    }

    function prepareBarChartData(results){
        var COMMON_ERROR_MSG = "invalid chart. please follow the instructions on the wiki page on how to create a public chart.";

        //find first data row
        var firstDataRowIdx = 0;
        for( i = 0; i < results.cellset.length; i++){
            var row = results.cellset[i];
            if( row[row.length-1].type == "DATA_CELL"){
                firstDataRowIdx = i;
                break;
            }
        };
        if( firstDataRowIdx == 0){
            return "ChartError#1: " + COMMON_ERROR_MSG;
        }
        //check if datarows have only one header
        if( results.cellset[firstDataRowIdx][1].type != "DATA_CELL"){
            return "ChartError#2: " + COMMON_ERROR_MSG;
        }
        //remove ROW_HEADER_HEADER from header rows
        var headerRows = [];
        for( i = 0; i < firstDataRowIdx; i++){
            var row = results.cellset[i];
            if( row[0].type == "COLUMN_HEADER" || row[0].type == "ROW_HEADER_HEADER"){
                row.shift();
                headerRows[i] = row;
            }else{
                return "ChartError#4: " + COMMON_ERROR_MSG;
            }
        }
        //check if headerrow has been reduced to one value
        var remainingRow = null;
        if( headerRows.length > 1){
            $.each(headerRows, function( index, row ) {
                var firstValue = null;
                var allSame = true;
                for( i = 0; i < row.length; i++){
                    if( row[i].value != "null"){
                        if( firstValue == null){
                            firstValue = row[i].value;
                        } else if( row[i].value != firstValue){
                            allSame = false;
                            break;
                        }
                    }
                }
                if( !allSame){
                    if( remainingRow == null){
                        remainingRow = row;
                    }else{
                        return "ChartError#5: " + COMMON_ERROR_MSG;
                    }
                }
            });                
        }else{
            remainingRow = headerRows[0];
        }
        //prepare labels
        var labels = [];
        for( i = 0; i < remainingRow.length; i++){
            labels[i] = remainingRow[i].value;
        }
        //prepare datasets
        datasets = [];
        var idx = 0;
        for( i = firstDataRowIdx; i < results.cellset.length; i++){
            var row = results.cellset[i];
            var label = row.shift();
            var data = [];
            for( k = 0; k < row.length; k++){
                data[k] = row[k].properties.raw;
            }
            datasets[idx] = { "label" : label.value, "data" : data, fillColor: randRGBAString(0.3)};
            idx++;
        }

        return { "labels" : labels, "datasets" : datasets};
    }

}



