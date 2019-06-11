<!DOCTYPE html>
<html>
<head>
    <link rel='stylesheet' type='text/css' href='style.css' />
    <script src="main.js"></script>
  <title>J-Graph</title>

  <script>

  var stored_fix = 0;

  function plot() {
    var fixed_cost = document.getElementById("fixed");
    stored_fix = fixed_cost.value;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);

    drawBoard();

    ctx.beginPath();
    ctx.moveTo(0, (c.height - fixed_cost.value)); <!--origin-->
    ctx.lineTo(c.width, (c.height - fixed_cost.value));
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }

  function adPlot() {
    var ad_spend = document.getElementById("ad");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, (c.height - stored_fix));
    ctx.lineTo(c.width, (c.height - stored_fix - ad_spend.value));
    //ctx.lineTo(800,1000)
    //ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.stroke();
  }


// Box width
var bw = 1000;
// Box height
var bh = 800;
// Padding
var p = 0;

function drawBoard(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
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
  </script>

</head>
<body onload="drawBoard();">

<div class="header">
  <h1> J-Graph </h1>
</div>

<div class="container">
  <div class="input-body">
    <label>Fixed Cost:</label>
    <input placeholder="fixed cost" type="text" id="fixed" onchange="plot()"/>

    <label>Current Ad Spend:</label>
    <input placeholder="current ad spend" id="ad" onchange="adPlot()"/>

    <label id="change">Revenue:</label>
    <input placeholder="revenue"/>
  </div>
  <div class="graph-body">
    <!--<iframe src="https://www.desmos.com/calculator/kjgsiieksf?embed"></iframe>-->
    <!--<iframe src="https://www.desmos.com/calculator/2mesganymt"></iframe>-->
    <canvas id="myCanvas" width="1000" height="800"></canvas>
  </div>
</div>

<script>

</script>

</body>
</html>
