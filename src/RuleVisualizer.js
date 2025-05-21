   // src/components/RuleVisualizer.js
   import React from 'react';
   import * as d3 from 'd3';

   const RuleVisualizer = ({ rules, trafficResult }) => {
     const svgRef = React.useRef();

     React.useEffect(() => {
       const svg = d3.select(svgRef.current);
       svg.selectAll("*").remove(); // Clear previous content

       const width = 600;
       const height = 400;

       svg.attr("width", width).attr("height", height);

       const ruleData = rules.map((rule, index) => ({
         rule,
         x: 100,
         y: 50 + index * 50,
       }));

       svg
         .selectAll("rect")
         .data(ruleData)
         .enter()
         .append("rect")
         .attr("x", (d) => d.x)
         .attr("y", (d) => d.y)
         .attr("width", 400)
         .attr("height", 40)
         .attr("fill", (d) => (d.rule === trafficResult ? "green" : "red"));

       svg
         .selectAll("text")
         .data(ruleData)
         .enter()
         .append("text")
         .attr("x", (d) => d.x + 10)
         .attr("y", (d) => d.y + 25)
         .text((d) => d.rule)
         .attr("fill", "white");
     }, [rules, trafficResult]);

     return (
       <div>
         <h2 className="text-lg font-bold">Rule Evaluation Visualization</h2>
         <svg ref={svgRef}></svg>
       </div>
     );
   };

   export default RuleVisualizer;
   
