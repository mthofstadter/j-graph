

var stored_fix = 0;
var ratio = 0;
var color = "red";

// Runs the script on document loaded
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function init() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  drawBoard();
}


function graph() {
  clear();
  drawBoard();
  plotFixed();
  colorLine();
  plotAd();
}

function clear() {
  ctx.beginPath();
  ctx.clearRect(0,0, c.width, c.height);
}

function plotFixed() {
  var fixed_cost = document.getElementById("fixed");
  stored_fix = fixed_cost.value;
  ratio = stored_fix / c.height;
  ctx.beginPath();
  //ctx.moveTo(0, (c.height - fixed_cost.value)); <!--origin-->
  //ctx.lineTo(c.width, (c.height - fixed_cost.value));
  ctx.moveTo(0, c.height - c.height/10);
  ctx.lineTo(c.width, c.height - c.height/10);
  ctx.strokeStyle = "blue";
  if(fixed_cost.value > 0) {
    ctx.stroke();
  }
}

function plotAd() {
  var ad_spend = document.getElementById("ad");
  ctx.beginPath();
  ctx.moveTo(0, (c.height - c.height/10));
  ctx.lineTo(c.width, (c.height - stored_fix * ratio - ad_spend.value));
  ctx.strokeStyle = color;
  if(ad_spend.value > 0) {
    ctx.stroke();
  }
}

function reset() {
  document.getElementById("ad").value = "";
  document.getElementById("fixed").value = "";
  document.getElementById("color").value = "#ff0000";
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
  var revBox = document.getElementById("color");
  color = revBox.value;
}
