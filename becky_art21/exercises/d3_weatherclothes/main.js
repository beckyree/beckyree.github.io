//variables: day of week, temperature, and corresponding outerwear
const data = [
  {name: "Sunday", amount: 56},
  {name: "Monday", amount: 69},
  {name: "Tuesday", amount: 72},
  {name: "Wednesday", amount: 68},
  {name: "Thursday", amount: 66},
  {name: "Friday", amount: 66},
  {name: "Saturday", amount: 62}
];

const width = 1500;
const height = 650;
const margin = {top: 50, bottom: 50, left: 50, right: 50};

// create svg that will hold chart, you can then target the svg with css to see it
const svg = d3.select(".d3-container")
.append("svg")
.attr("height", height - margin.top - margin.bottom)
.attr("width", width - margin.left - margin.right)
.attr("viewBox", [0,0, width, height]);

// set up the x scale to match how many elements we have in our object
const x = d3.scaleBand()
.domain(d3.range(data.length))
.range([margin.left, width - margin.right])
.padding(0.1);

// set up y scale to match the amounts. 0 to 15 will work
const y = d3.scaleLinear()
.domain([0,80])
.range([height - margin.bottom, margin.top]);

// start creating the bars for the chart.
// we set up rectangles, as well as sort the data from biggest to smallest
// svg
//   .append("g")
//   // .attr("fill", "#D4B7D2")
//   .selectAll("rect")
// sort data according to value
//   .data(data.sort((a,b) => d3.descending(a.amount, b.amount)))
//   .join("rect")
//   // places data on correct positions
//   .attr("x", (d, i) => x(i))
//   .attr("y", (d) => y(d.amount))
//   .attr("height", d => y(0) - y(d.amount))
//   .attr("width", x.bandwidth())
  //add a class
  // .attr("class", "rectangle")

  // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.name) })
        .y(function(d) { return y(d.amount) })
        )
      .attr("class", "linePath")

// set up labels for x axis
// the transform moves the labels to the bottom, comment out to see what i mean
function xAxis(g) {
  g.attr("transform", `translate(0, ${height - margin.bottom})`)
  g.call(d3.axisBottom(x).tickFormat(i => data[i].name))
}

// set up labels for y axis
function yAxis(g){
  g.attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y).ticks(null, data.format))
}


// draw the labels onto the page for y
svg.append("g").call(yAxis);

//draws the labels onto the page. this puts them at the top by default so the you need to transform their position.
svg.append("g").call(xAxis);

// draws bars onto page. try adding another flower to the data to see how it changes.
  // svg.node();




// // set the dimensions and margins of the graph
// const margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// const svg = d3.select(".d3-container")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

// //Read the data
// d3.csv("data",

//   // When reading the csv, I must format variables:
//   function(d){
//     return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
//   }).then(

//   // Now I can use this dataset:
//   function(data) {

//     // Add X axis --> it is a date format
//     const x = d3.scaleTime()
//       .domain(d3.extent(data, function(d) { return d.date; }))
//       .range([ 0, width ]);
//     svg.append("g")
//       .attr("transform", `translate(0, ${height})`)
//       .call(d3.axisBottom(x));

//     // Add Y axis
//     const y = d3.scaleLinear()
//       .domain([0, d3.max(data, function(d) { return +d.value; })])
//       .range([ height, 0 ]);
//     svg.append("g")
//       .call(d3.axisLeft(y));

//     // Add the line
//     svg.append("path")
//       .datum(data)
//       .attr("fill", "none")
//       .attr("stroke", "")
//       .attr("stroke-width", 1.5)
//       .attr("d", d3.line()
//         .x(function(d) { return x(d.date) })
//         .y(function(d) { return y(d.value) })
//         )

// })