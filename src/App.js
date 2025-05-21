   // src/App.js
   import React, { useState } from 'react';
   import RuleEditor from './components/RuleEditor';
   import TrafficSimulator from './components/TrafficSimulator';
   import RuleVisualizer from './components/RuleVisualizer';

   const App = () => {
     const [rules, setRules] = useState([]);
     const [trafficResult, setTrafficResult] = useState('');

     const addRule = (rule) => {
       setRules((prevRules) => [...prevRules, rule]);
     };

     const simulateTraffic = (traffic) => {
       const { sourceIP, destinationIP, protocol, port } = traffic;
       let result = 'DENIED';

       for (const rule of rules) {
         const [action, proto, from, to, portRule] = rule.split(' ');

         if (action === 'ALLOW' && proto === protocol) {
           if (from === 'ANY' || from === sourceIP) {
             if (to === 'ANY' || to === destinationIP) {
               if (portRule === 'ANY' || portRule === port) {
                 result = 'ALLOWED';
                 break;
               }
             }
           }
         }
       }

       setTrafficResult(result);
     };

     return (
       <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Firewall Rule Simulator</h1>
         <RuleEditor onAddRule={addRule} />
         <TrafficSimulator onSimulate={simulateTraffic} />
         <RuleVisualizer rules={rules} trafficResult={trafficResult} />
         <div className="mt-4">
           <h2 className="text-lg font-bold">Traffic Result: {trafficResult}</h2>
         </div>
       </div>
     );
   };

   export default App;
   
