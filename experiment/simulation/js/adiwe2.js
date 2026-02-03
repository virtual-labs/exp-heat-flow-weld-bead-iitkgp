/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
function da(fil,n){

    var adi=d3.csv(fil, d3.autoType).then(data => {
  const Xv = data.map(row => row.X_Value);
  const t1 = data.map(row => row.Temperature_1);
  const t2 = data.map(row => row.Temperature_0);
  const t3 = data.map(row => row.Temperature_2);
adin(Xv,t1,t2,t3,n);
});

function adin(Xv, t1, t2, t3,n) {
    
    var minXv = Math.round(Math.min(...Xv));
    var maxXv = Math.round(Math.max(...Xv));
    var minT1 = Math.min(...t1);
    var maxT1 = Math.max(...t1);
    var minT2 = Math.min(...t2);
    var maxT2 = Math.max(...t2);
    var minT3 = Math.min(...t3);
    var maxT3 = Math.max(...t3);
    var miny = Math.round(Math.min(minT1, minT2, minT3));
    var maxy = Math.round(Math.max(maxT1, maxT2, maxT3));
    let x=[];
    let y1=[];
    let y2=[];
    let y3=[];
    let i=0;
    var lay= { title: {text: 'Temperature Vs Time', font: { size: 20 } },
                xaxis: { range: [minXv-20, maxXv+20],showgrid: true, title: {text:'Time (s)' },   },
                yaxis: { range: [miny-10, maxy+10], showgrid: true, title: {text:'Temperature (<sup>o</sup>C)'}, },
                showlegend: true,
                legend: {  xanchor: 'right', yanchor: 'top', font: { size: 20 }},
                //legend: { orientation: 'h',  x: 0.5,  y: 1.2, xanchor: 'center' , },
            };
  var dat=[{ x: x, y: y1, type: 'scatter', mode: 'lines', line: {color: 'green'}, name: 'Temp 1' },
{ x: x, y: y2, type: 'scatter', mode: 'lines', line: {color: 'red'}, name: 'Temp 2'  },
{ x: x, y: y3, type: 'scatter', mode: 'lines', line: {color: 'blue'}, name: 'Temp 3'  }];
Plotly.newPlot('grphn', dat, lay);
requestAnimationFrame(pltudt);
function adi(Xva, T1, T2, T3) {
   x.push(Xva);
    y1.push(T1);
    y2.push(T2);
    y3.push(T3); }

function pltudt()   {
    if (i < Xv.length) {
    adi(Xv[i], t1[i], t2[i], t3[i]);
    Plotly.newPlot('grphn', dat, lay);
    requestAnimationFrame(pltudt);
    
i=i+n;
}   
}
        $('#temp1').text(Number(maxT1.toFixed(2)));
        $('#temp2').text(Number(maxT2.toFixed(2)));
        $('#temp3').text(Number(maxT3.toFixed(2)));
Plotly.newPlot('grphn', dat, lay);


}

};


$(document).ready(function(){
    adiwe2(0);
  
});
function adiwe2(a){
    if(a==0)
    {
        $("#adism").hide();
        $("#adiv").html("<div class=\"col-sm-12\"><img width=\"100%\" id=\"adivid\" src=\"./images/P1.png\" /></div>");
        $("#adiv").show();
        $("#adipl").hide();
        ch=0;
    
    }
    else
    {
        if(a==1){
            $("#adis").hide();
            $("#adism").show();
            $("#adipl").hide();
            $("#adig").show();
            $("#adiv").html("<div class=\"col-sm-12\"><video width=\"100%\" autoplay id=\"adivid\"> <source src=\"./images/Weld2.mp4\" type=\"video/mp4\"> </video> </div>");
            document.getElementById("adivid").playbackRate = 1.0;
            da("./2mm_sec.csv",Number(4));
            document.getElementById("adivid").onended=function(){
                $("#adiv").html("<div class=\"col-sm-12\"><img width=\"100%\" id=\"adivid\" src=\"./images/P2.png\" /></div>");
                $("#adipl").show();
                $("#adi4mm").show();
            };
        }
        else if(a==2){
            $("#adis").hide();
            $("#adism").show();
            $("#adipl").hide();
            $("#adig").show();
            
            $("#adiv").html("<div class=\"col-sm-12\"><video width=\"100%\" autoplay  id=\"adivid\"> <source src=\"./images/Weld2.mp4\" type=\"video/mp4\"> </video> </div>");
            document.getElementById("adivid").playbackRate = 2.0;
            da("./4mm_sec.csv",Number(4));
            document.getElementById("adivid").onended=function(){
                $("#adiv").html("<div class=\"col-sm-12\"><img width=\"100%\" id=\"adivid\" src=\"./images/P2.png\" /></div>");
                $("#adipl").show();
                $("#adi2mm").show();
            }
        }
    }

};