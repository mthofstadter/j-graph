

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
  var canvas2 = document.getElementById("myCanvas2");
  var ctx2 = canvas2.getContext("2d");
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
  ratio = (c.height / 10) / stored_fix;
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
  console.log(ratio);
  var ad_spend = document.getElementById("ad");
  ctx.beginPath();
  ctx.moveTo(0, (c.height - c.height/10));
  ctx.lineTo(c.width, (c.height - c.height/10 - (ratio * ad_spend.value)));
  ctx.strokeStyle = color;
  if(ad_spend.value > 0) {
    ctx.stroke();
  }
}

function reset() {
  document.getElementById("ad").value = "";
  document.getElementById("fixed").value = "";
  document.getElementById("revenue").value = "";
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


var width = canvas2.width;
var height = canvas2.height;
var plot = function plot(fn, range) {
        var widthScale = (width / (range[1] - range[0])),
            heightScale = (height / (range[3] - range[2])),
            first = true;

        ctx.beginPath();

        for (var x = 0; x < width; x++) {
            var xFnVal = (x / widthScale) - range[0],
                yGVal = (fn(xFnVal) - range[2]) * heightScale;

            yGVal = height - yGVal; // 0,0 is top-left

            if (first) {
                ctx2.moveTo(x, yGVal);
                first = false;
            }
            else {
                ctx2.lineTo(x, yGVal);
            }
        }

        ctx2.strokeStyle = "red";
        ctx2.lineWidth = 3;
        ctx2.stroke();
    };
plot(function (x) {
    return Math.sin(x) + Math.sin(x * 2);
}, [0, Math.PI * 4, -4, 4]);
