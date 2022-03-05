/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    5.3 - Adding an update function
 */
/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    5.3 - Adding an update function
 */

var margin = { top: 10, right: 10, bottom: 100, left: 100 },
  width = 960 - margin.left - margin.right,
  height = 640 - margin.top - margin.bottom;

// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width.margin.left + margin.right)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
d3.json("data/buildings.json").then((data) => {
  data.forEach((d) => {
    d.height = +d.height;
  });

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, 400])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const y = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d.height), d3.max(data, (d) => d.height)])
    .range([0, 400]);

  const rect = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("height", (d) => y(d.height))
    .attr("width", x.bandwidth)
    .attr("x", (d) => x(d.name))
    .attr("y", 50)
    .attr("fill", "tomato");
});
