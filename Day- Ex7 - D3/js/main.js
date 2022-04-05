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

// create 2 data_set
var data1 = [
  { group: "A", value: 4 },
  { group: "B", value: 16 },
  { group: "C", value: 8 },
];

var data2 = [
  { group: "A", value: 7 },
  { group: "B", value: 1 },
  { group: "C", value: 20 },
];

// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 70, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// X axis
var x = d3
  .scaleBand()
  .range([0, width])
  .domain(
    data1.map(function (d) {
      return d.group;
    })
  )
  .padding(0.2);
svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear().domain([0, 20]).range([height, 0]);
svg.append("g").attr("class", "myYaxis ").call(d3.axisLeft(y));

// xtra start
var yGridLine = d3.axisLeft(y).tickSize(-width, 0, 0).tickFormat("");

// var ordinalColorScale = d3.scale.category20();

svg
  .append("g")
  .classed("gridLine", true)
  .attr("transform", "translate(0,0)")
  .call(yGridLine)
  .style("stroke-dasharray", "25 15");

// xtra end

// A function that create / update the plot for a given variable:
function update(data) {
  var u = svg.selectAll("rect").data(data);

  u.enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
    .attr("x", function (d, i) {
      // return x(d.group);
      if (i === 0) return 65 + "px";
      else if (i === 1) return 180 + "px";
      else if (i === 2) return 295 + "px";
    })
    .attr("y", function (d) {
      return y(d.value);
    })
    // .attr("width", x.bandwidth())
    .attr("width", 10)
    .attr("height", function (d) {
      return height - y(d.value);
    })
    .attr("fill", "#69b3a2");
}

// Initialize the plot with the first dataset
update(data1);
