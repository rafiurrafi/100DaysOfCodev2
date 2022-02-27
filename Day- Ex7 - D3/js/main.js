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

d3.json("data/revenues.json").then((data) => {
  data.forEach((d) => (d.revenue = +d.revenue));
  const months = data.map((d) => d.month);

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.month))
    .range([0, 400])
    .paddingInner(0.3)
    .paddingOuter(0.3);
  const y = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d.revenue), d3.max(data, (d) => d.revenue)])
    .range([0, 400]);

  const rect = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => x(d.month))
    .attr("y", 20)
    .attr("height", (d) => y(d.revenue))
    .attr("width", x.bandwidth)
    .attr("fill", "gray");
});
