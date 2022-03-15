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

const margin = { top: 10, right: 10, bottom: 100, left: 100 },
  width = 500 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .style("background-color", "#f1f1f1")
  .style("margin", "20px 0");
const g = svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.json("data/buildings.json").then((data) => {
  data.forEach((d) => {
    d.height = +d.height;
  });

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, 400])
    .paddingInner(0.2)
    .paddingOuter(0.3);

  const xAxisCall = d3.axisBottom(x);
  g.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxisCall)
    .selectAll("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-40)");

  // xlabel
  g.append("text")
    .attr("class", "x-label")
    .attr("x", width / 2)
    .attr("y", height + 100)
    .attr("text-anchor", "middle")
    .text("World's largest buildings");

  // ylabel
  g.append("text")
    .attr("class", "y-label")
    .attr("x", -1)
    .attr("y", height / 2)
    .attr("transform", "rotate(90)")
    .text("height");

  const y = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d.height), d3.max(data, (d) => d.height)])
    .range([height, 100]);

  const yAxisCall = d3.axisLeft(y);
  g.append("g").attr("class", "y-axis").call(yAxisCall);
  g.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.name))
    // .attr("y", (d) => y(d.height))
    .attr("y", 40)
    .attr("height", (d) => height - y(d.height))
    .attr("width", x.bandwidth)
    .attr("fill", "gray");
});
