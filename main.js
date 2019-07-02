

var stored_fix = 0;
var ratio = 0;
var color = "#000000";
var h = 800;
var w = 1200;
var ch = h;
var cw = w;
var subStepCount = 10;  // number of sub setps
var scale = 1;         // scale of the plot

var colorFocused = -1;
var colorFixed = "#0000ff";
var colorAd = "#ff0000";
var colorRevenue = "#008000";

// Runs the script on document loaded
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function init() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.setTransform(scale,0,0,-scale,0, h);
  drawBoard();
}

function callFixed() {
  document.getElementById("color").value = colorFixed;
  colorFocused = 0;
  graph();
}

function callAd() {
  document.getElementById("color").value = colorAd;
  colorFocused = 1;
  graph();
}

function callRevenue() {
  document.getElementById("color").value = colorRevenue;
  colorFocused = 2;
  graph();
}


function graph() {
  clear();
  drawBoard();
  colorLine();
  plotFixed();
  plotAd();
  callPlot();
}

function clear() {
  ctx.beginPath();
  ctx.clearRect(0,0, c.width, c.height);
}

function plotFixed() {
  var fixed_cost = document.getElementById("fixed");
  stored_fix = fixed_cost.value;
  ratio = (c.height / 10) / stored_fix;
  ctx.beginPath();
  ctx.moveTo(0, c.height/10);
  ctx.lineTo(c.width, c.height/10);
  ctx.strokeStyle = colorFixed;
  if(fixed_cost.value > 0) {
    ctx.stroke();
  }
}

function plotAd() {
  console.log(ratio);
  var ad_spend = document.getElementById("ad");
  ctx.beginPath();
  ctx.moveTo(0, c.height/10);
  ctx.lineTo(c.width, c.height/10 + (ratio * ad_spend.value));
  ctx.strokeStyle = colorAd;
  if(ad_spend.value > 0) {
    ctx.stroke();
  }
}

function reset() {
  document.getElementById("fixed").value = "";
  document.getElementById("ad").value = "";
  document.getElementById("revenue").value = "";
  //document.getElementById("color").value = "#000000";
  graph();
}

function about() {
  window.alert("about");
}

function drawBoard() {
// Box width
var bw = c.width;
// Box height
var bh = c.height;
// Padding
var p = 0;

ctx.beginPath();
ctx.strokeStyle = "gainsboro";
  for (var x = 0; x <= bw; x += 40) {
      ctx.moveTo(0.5 + x + p, p);
      ctx.lineTo(0.5 + x + p, bh + p);
  }

  for (var x = 0; x <= bh; x += 40) {
      ctx.moveTo(p, 0.5 + x + p);
      ctx.lineTo(bw + p, 0.5 + x + p);
  }
  ctx.stroke();
}

function colorLine() {
  var colorBox = document.getElementById("color");
  if(colorFocused == 0) {
    colorFixed = colorBox.value;
  }
  else if(colorFocused == 1) {
    colorAd = colorBox.value;
  }
  else if(colorFocused == 2) {
    colorRevenue = colorBox.value;
  }
}

   function plot(func,col,lineWidth){
     console.log(func);
     console.log(typeof func);
     var invScale = 1 / scale;    // inverted scale is the size of a pixel
     var top = ch * invScale;     // get top and bottom
     var bottom = -ch * invScale;
     var subStep = invScale / subStepCount; // get the sub steps between pixels
     var x,y,yy,xx,subX;                    // xx,yy are the coords of prev point
     var start = (-cw - 1) * invScale;      // get the start and end
     var end = (cw + 1) * invScale;
     // set render styles
     ctx.strokeStyle = col;
     ctx.lineWidth = lineWidth * invScale; // scale line to be constant size

     ctx.beginPath();
     for(x = start; x < end; x += invScale){ // pixel steps
         for(subX = 0; subX < invScale; subX += subStep){  // sub steps
             y = func(x+subX);                    // get y for x
             if(yy !== undefined){                // is this not the first point
                 if(y > top || y < bottom){       // this y outside ?
                     if(yy < top && yy > bottom){ // last yy inside?
                         ctx.lineTo(x + subX,y);
                     }
                 } else {                         // this y must be inside
                     if(yy > top || yy < bottom){ // was last yy outside
                         ctx.moveTo(xx,yy);       // start a new path
                     }
                     if(subX === 0){              // are we at a pixel
                         if(y > bottom && y < top){  // are we inside
                             // if the step is large then might be a line break
                             if(Math.abs(yy-y) > (top - bottom) * (1/3)){
                                 ctx.moveTo(x,y);
                             }else{
                                 ctx.lineTo(x,y);
                             }
                         }
                     }
                 }
             }else{
                 if(subX === 0){
                     ctx.moveTo(x,y);
                 }
             }
             yy  = y;
             xx = x+ subX;
         }
     }
     ctx.stroke();
 }

 function callPlot() {
   var revenue = document.getElementById("revenue");
   revenue = revenue.value;
   if(revenue == "") {
     return;
   }

   var equation = eval("(x)=>" + revenue);

   plot(equation,colorRevenue,1);
   //plot((x)=>Math.tan(Math.cos(x/2) * 10),"#F88",1);
   //plot((x)=>Math.tan(x),"blue",2);
 }
