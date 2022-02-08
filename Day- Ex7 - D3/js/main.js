/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    3.2 - Linear scales
 */

const margin = { left: 10, right: 10, top: 10, bottom: 10 };
const width = 960 - margin.left - margin.right;
const height = 1000 - margin.top - margin.bottom;

const g = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.right + ")");
