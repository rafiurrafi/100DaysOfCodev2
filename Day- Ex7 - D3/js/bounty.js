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

const margin = { left: 100, right: 10, top: 10, bottom: 100 };
const height = 400 - margin.top - margin.bottom;
const width = 400 - margin.left - margin.right;

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right);
const g = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.right + ")");
g.append("text")
  .attr("class", "x-axis-label")
  .attr("x", width / 2)
  .attr("y", height)
  .attr("font-size", 20)
  .attr("text-anchor", "middle")
  .text("Buildings");
d3.json("data/buildings.json").then((data) => {
  data.forEach((d) => {
    d.height = +d.height;
  });

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, width])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const xAxisCall = d3.axisBottom(x);
  g.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(" + 0 + "," + height + ")")
    .call(xAxisCall)
    .selectAll("text")
    .attr("y", 100)
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-40)");

  const y = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d.height), d3.max(data, (d) => d.height)])
    .range([0, height]);
  const yAxisCall = d3.axisLeft(y);
  g.append("g").attr("class", "y-axis").call(yAxisCall);

  const rect = g
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", x.bandwidth)
    .attr("height", (d) => y(d.height))
    .attr("x", (d, i) => x(d.name))
    .attr("y", 20)
    .attr("fill", "gray");
});
