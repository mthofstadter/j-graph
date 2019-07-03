<!DOCTYPE html>
<html>
<head>
  <link rel='stylesheet' type='text/css' href='style.css' />
  <script src="/j-graph/main.js"></script>

  <title>J-Graph</title>

  <script>

  </script>

</head>

<body>

  <ul>
    <li id="main">J-Graph</li>
    <li><a href="#" onclick="about()">About</a></li>
    <li><a href="#" onclick="reset()" id="resetButton">Reset</a></li>
  </ul>

  <div class="main-body">
  <div class="graph-body">
      <canvas id="myCanvas" width="1200" height="800"></canvas>
  </div>
  <div class="label-body">
      <label>Fixed Cost:</label>
      <label>Ad Spend:</label>
      <label>Revenue:</label>
  </div>
  <div class="input-body">
    <input type="text" id="fixed" onchange="graph()" onfocus="callFixed()"/>
    <input id="ad" onchange="graph()" onfocus="callAd()"/>
    <input id="revenue" onchange="graph()" onfocus="callRevenue()" placeholder="Math.pow((x-590),2)*(-0.002)+700"
    value="Math.pow((x-590),2)*(-0.002)+700"/>
    <input type="color" value="#000000" id="color" onchange="graph()"/>
  </div>

  </div>

  <div id="bigolediv">
  </div>

  <script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
  </script>

  </body>
</html>
