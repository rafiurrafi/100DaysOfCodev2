/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    3.2 - Linear scales
 */

const margin = { bottom: 50, left: 30, right: 10, top: 10 };
const width = 450 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

const g = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.right + ")");

d3.json("data/buildings.json").then((data) => {
  data.forEach((d) => {
    d.height = +d.height;
  });
  const x = d3
    .scaleBand()
    .domain([
      "Burj Khalifa",
      "Shanghai Tower",
      "Abraj Al-Bait Clock Tower",
      "Ping An Finance Centre",
      "Lotte World Tower",
    ])
    .range([0, 430])
    .paddingInner(0.2)
    .paddingOuter(0.2);
  const y = d3.scaleLinear().domain([0, 900]).range([0, 400]);
  g.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.name))
    .attr("y", 40)
    .attr("height", (d) => y(d.height))
    .attr("width", x.bandwidth)
    .attr("fill", "grey");
});
