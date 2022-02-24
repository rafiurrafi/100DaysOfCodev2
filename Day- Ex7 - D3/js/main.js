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
  .attr("height", 400)
  .attr("width", 400);

d3.csv("data/revenues.csv").then((data) => {
  data.forEach((d) => {
    d.revenue = +d.revenue;
  });

  const x = d3
    .scaleBand()
    .domain(["a", "b", "c", "d", "e", "f", "g"])
    .range([0, 400])
    .paddingInner(0.2)
    .paddingOuter(0.2);
  const y = d3.scaleLinear().domain([0, 54273]).range([0, 400]);

  const rect = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => x(d[0]))
    .attr("y", 20)
    .attr("height", (d) => y(d.revenue))
    .attr("width", x.bandwidth)
    .attr("fill", "red");
  console.log(rect);
});
