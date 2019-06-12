<!DOCTYPE html>
<html>
<head>
    <link rel='stylesheet' type='text/css' href='style.css' />
    <script src="main.js"></script>
  <title>J-Graph</title>

  <script>

  var stored_fix = 0;

  function graph() {
    clear();
    drawBoard();
    plotFixed();
    plotAd();
  }

  function clear() {
    ctx.beginPath();
    ctx.clearRect(0,0, c.width, c.height);
  }

  function plotFixed() {
    var fixed_cost = document.getElementById("fixed");
    stored_fix = fixed_cost.value;
    ctx.beginPath();
    ctx.moveTo(0, (c.height - fixed_cost.value)); <!--origin-->
    ctx.lineTo(c.width, (c.height - fixed_cost.value));
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }

  function plotAd() {
    var ad_spend = document.getElementById("ad");
    ctx.beginPath();
    ctx.moveTo(0, (c.height - stored_fix));
    ctx.lineTo(c.width, (c.height - stored_fix - ad_spend.value));
    ctx.strokeStyle = "red";
    ctx.stroke();
  }

function drawBoard(){
  // Box width
  var bw = 1000;
  // Box height
  var bh = 800;
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
  </script>

</head>
<body onload="drawBoard();">

<div class="header">
  <h1> J-Graph </h1>
</div>

<div class="container">
  <div class="input-body">
    <label>Fixed Cost:</label>
    <input placeholder="fixed cost" type="text" id="fixed" onchange="graph()"/>

    <label>Current Ad Spend:</label>
    <input placeholder="current ad spend" id="ad" onchange="graph()"/>

    <label id="change">Revenue:</label>
    <input placeholder="revenue"/>
  </div>
  <div class="graph-body">
    <canvas id="myCanvas" width="1000" height="800"></canvas>
  </div>
</div>

<script>
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
</script>

</body>
</html>
