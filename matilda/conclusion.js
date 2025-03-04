// Sample JSON data (replace this with your actual JSON)
const grouped = fetch('conclusion.json'); //(with path)

  const yLabel = "Medial-Lateral Axis Momement\nAverage Newton-meters";
  const scenarioLabels = {
    "ECL1": "Eyes Closed, Music 0.1Hz",
    "ECR": "Eyes Closed, Music Regular",
    "WL1": "VR shifting, Music 0.1Hz",
    "WR": "VR shifting, Music Regular",
    "WOL1": "VR Stable, Music 0.1Hz",
    "WOR": "VR Stable, Music Regular"
  };

  const width = 700, height = 500, margin = { top: 40, right: 20, bottom: 100, left: 60 };

  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  const x = d3.scaleBand()
    .domain(grouped.map(d => d.Senario))
    .range([margin.left, width - margin.right])
    .padding(0.4);

  const y = d3.scaleLinear()
    .domain([0, d3.max(grouped, d => d.dMx)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  // Draw bars
  svg.selectAll(".bar")
    .data(grouped)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.Senario))
    .attr("y", d => y(d.dMx))
    .attr("height", d => y(0) - y(d.dMx))
    .attr("width", x.bandwidth());

  // Add X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d => scenarioLabels[d])) // Custom labels
    .selectAll("text")
    .style("text-anchor", "start")
    .attr("dx", "0.5em")
    .attr("dy", "0.5em");

  // Add Y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // Y-axis Label
  svg.append("text")
    .attr("transform", `rotate(-90)`)
    .attr("x", -height / 2)
    .attr("y", margin.left / 3)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .attr("class", "axis-label")
    .text(yLabel);

  // Add annotation
  svg.append("text")
    .attr("class", "annotation")
    .attr("x", width / 2)
    .attr("y", height - margin.bottom + 40)
    .style("text-anchor", "middle")
    .text("Less environment stability = More movement");