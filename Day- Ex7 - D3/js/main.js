/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    3.2 - Linear scales
 * "Burj Khalifa",
      "Shanghai Tower",
      "Abraj Al-Bait Clock Tower",
      "Ping An Finance Centre",
      "Lotte World Tower",
 */
const margin = { bottom: 50, top: 10, right: 10, left: 50 };
const width = 450 - margin.left - margin.right;
const height = 500 - margin.top - margin.left;
const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.left + margin.right);

const g = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

const x = d3.scaleBand().range([0, width]).paddingInner(0.2).paddingOuter(0.2);
const y = d3.scaleLinear().range([0, height]);

const xAxisGroup = g
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0, " + height + ")");
// .selectAll("text")
// .attr("text-anchor", "end")
// .attr("transform", "rotate(-40)");

const yAxisGroup = g.append("g").attr("class", "y-axis");
g.append("text")
  .attr("x", width / 2)
  .attr("y", height + 140)
  .attr("text-anchor", "middle")
  .text("World large tallest buildings");
d3.json("data/buildings.json").then((data) => {
  data.forEach((d) => {
    d.height = +d.height;
  });

  d3.interval(() => {
    console.log("Run");
    update(data);
  }, 1000);
});
function update(data) {
  x.domain(data.map((d) => d.name));
  y.domain([0, d3.max(data, (d) => d.height)]);
  const xAxisCall = d3.axisBottom(x);
  xAxisGroup.call(xAxisCall);

  const yAxisCall = d3.axisLeft(y);
  yAxisGroup.call(yAxisCall);
  const rects = g.selectAll("rect").data(data).enter();

  rects.exit().remove();
  rects
    .attr("x", (d) => x(d.name))
    .attr("y", 20)
    .attr("height", (d) => y(d.height))
    .attr("width", x.bandwidth);

  rects
    .append("rect")
    .attr("x", (d) => x(d.name))
    .attr("y", 20)
    .attr("height", (d) => y(d.height))
    .attr("width", x.bandwidth)
    .attr("fill", "grey");
}
