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
  .attr("wodtj", 400)
  .attr("height", 400);

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
    .attr("x", (d, i) => x(d.name))
    .attr("y", 20)
    .attr("fill", "orangered");
});
