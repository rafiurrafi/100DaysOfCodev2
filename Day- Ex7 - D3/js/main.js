/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    5.2 - Looping with intervals
 */

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("height", 400)
  .attr("width", 400);

const data = d3.json("data/buildings.json").then((data) => {
  data.forEach((d) => {
    d.height = +d.height;
  });
  const y = d3.scaleLinear().domain([0, 828]).range([0, 400]);
  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", 20)
    .attr("x", (d, i) => i * 60)
    .attr("width", 40)
    .attr("height", (d) => y(d.height))
    .attr("fill", "grey");
});
