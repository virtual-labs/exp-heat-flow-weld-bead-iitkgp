/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
function da(fil){
    var ymax=0,xmax=0;
    Plotly.d3.csv(fil, function(dat){ 
        var t = [], y1 = [], y2 = [], y3 = [];
        for (var i=0; i<dat.length; i++) {
            row = dat[i];
            t[i]=Number(row['X_Value']);
            y1[i]=row['Temperature_1'];
            y2[i]=row['Temperature_0'];
            y3[i]=row['Temperature_2'];
          }
        t.sort(function(a,b){return a-b;});
        y1.sort(function(a,b){return a-b;});
        y2.sort(function(a,b){return a-b;});
        y3.sort(function(a,b){return a-b;});
        xmax=Math.round(Number(t[t.length-1])+10);
        ymax=Math.round(Math.max(Number(y1[y1.length-1]),Number(y2[y2.length-1]),Number(y3[y3.length-1]))+10);
        $('#temp1').text(Number(y1[y1.length-1]));
        $('#temp2').text(Number(y2[y2.length-1]));
        $('#temp3').text(Number(y3[y3.length-1]));
    });
Plotly.d3.csv(fil, function(data){ 
    var t = [], y1 = [], y2 = [], y3 = [];
    for (var i=0; i<data.length; i++) {
        row = data[i];
        t[i]=Number(row['X_Value']);
        y1[i]=row['Temperature_1'];
        y2[i]=row['Temperature_0'];
        y3[i]=row['Temperature_2'];
      }
    var g1 = {
        x: t,
        y: y1,
        type: 'scatter',
        name: 'Temp 1'
        };
    var g2 = {
            x: t,
            y: y2,
            type: 'scatter',
            name: 'Temp 2'
            };
    var g3 = {
            x: t,
            y: y3,
            type: 'scatter',
            name: 'Temp 3'
            };
    var data = [g1,g2,g3];
    grp(data,xmax,ymax);
});
};

function grp(gda,xmax,ymax){
    gr = document.getElementById('grph');
    var adilay={title: 'Temperature Vs Time',showlegend: true,
    legend: {
      x: 1,
      xanchor: 'right',
      y: 1
    },
    font: {
        family: 'Courier New, monospace',
        size: 15,
        color: 'black'
        },
    xaxis: {
        title:'Time (s)',
        showticklabels: true,
        autotick: true,
        showgrid: true,
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 3,
        linecolor: '#636363',
        linewidth: 1,
        zeroline: true,
        showline: true,
        mirror: 'ticks',
        range: [
            0,
            xmax
          ] },
    yaxis: {
        title:'Temprature (<sup>o</sup>C)',
        showticklabels: true,
        autotick: true,
        showgrid: true,
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 3,
        linecolor: '#636363',
        linewidth: 1,
        zeroline: true,
        showline: true,
        mirror: 'ticks',
        range: [
            0,
            ymax
          ] }
    };
    Plotly.newPlot(gr, gda, adilay);
};

$(document).ready(function(){
    adiwe2(0);
});
function adiwe2(a){
    if(a==0)
    {
        $("#adiv").hide();
        $("#adipl").hide();
        ch=0;
    }
    else
    {
        $("#adiv").show();        
        if(a==1){
            $("#adi4mm").hide();
            $("#adipl").hide();
            da("./2mm_sec.csv");
            $("#adiv").html("<div class=\"col-sm-12\"><video width=\"100%\" autoplay muted id=\"adivid\"> <source src=\"./images/Weld3_Adi1.mp4\" type=\"video/mp4\"> </video> </div>");
            document.getElementById("adivid").onended=function(){
                $("#adiv").html("<div class=\"col-sm-12\"><img width=\"100%\" id=\"adivid\" src=\"./images/P2.png\" /></div>");
                $("#adipl").show();
                $("#adi4mm").show();
            }
        }
        else if(a==2){
            $("#adi2mm").hide();
            $("#adipl").hide();
            da("./4mm_sec.csv");
            $("#adiv").html("<div class=\"col-sm-12\"><video width=\"100%\" autoplay muted id=\"adivid\"> <source src=\"./images/Weld3_Adi2.mp4\" type=\"video/mp4\"> </video> </div>");
            document.getElementById("adivid").onended=function(){
                $("#adiv").html("<div class=\"col-sm-12\"><img width=\"100%\" id=\"adivid\" src=\"./images/P2.png\" /></div>");
                $("#adipl").show();
                $("#adi2mm").show();
            }
        }
    }

};