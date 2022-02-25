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
const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

d3.json("data/revenues.json").then(function (data) {
  data.forEach((d) => {
    d.revenue = +d.revenue;
  });

  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, 400])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const rect = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("height", (d) => d.revenue)
    .attr("width", x.bandwidth)
    .attr("x", (d, i) => i * 40)
    .attr("Y", 20)
    .attr("fill", "red");
});
