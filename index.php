<!DOCTYPE HTML>
<html>
<head>
    <link rel='stylesheet' type='text/css' href='style.css' />
    <script src="main.js"></script>
  <title>J-Graph</title>
</head>
<body>

<div class="header">
  <h1> J-Graph </h1>
</div>

<div class="container">
  <div class="input-body">
    <label>Fixed Cost:</label>
    <input placeholder="fixed cost"/>

    <label>Current Ad Spend:</label>
    <input placeholder="current ad spend"/>

    <label id="change">Revenue:</label>
    <input placeholder="revenue"/>
  </div>
  <div class="graph-body">
    <!--<iframe src="https://www.desmos.com/calculator/kjgsiieksf?embed"></iframe>-->
    <iframe src="https://www.desmos.com/calculator/2mesganymt"></iframe>
    <canvas id="myCanvas" width="200" height="100"></canvas>
  </div>
</div>

</body>
</html>
