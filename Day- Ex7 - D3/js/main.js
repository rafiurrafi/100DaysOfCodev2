/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    3.2 - Linear scales
 */

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("height", 500)
  .attr("width", 500);

d3.json("data/buildings.json").then((data) => {
  data.forEach((d) => {
    d.height = +d.height;
  });
  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("height", (d) => d.height)
    .attr("width", 40)
    .attr("x", (d, i) => i * 60)
    .attr("y", 20)
    .attr("color", "grey");
});
