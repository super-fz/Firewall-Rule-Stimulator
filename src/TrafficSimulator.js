   // src/components/TrafficSimulator.js
   import React, { useState } from 'react';

   const TrafficSimulator = ({ onSimulate }) => {
     const [sourceIP, setSourceIP] = useState('');
     const [destinationIP, setDestinationIP] = useState('');
     const [protocol, setProtocol] = useState('TCP');
     const [port, setPort] = useState('');

     const handleSimulate = () => {
       onSimulate({ sourceIP, destinationIP, protocol, port });
       setSourceIP('');
       setDestinationIP('');
       setPort('');
     };

     return (
       <div className="mb-4">
         <h2 className="text-lg font-bold">Traffic Simulator</h2>
         <input
           className="w-full p-2 border border-gray-300 rounded mb-2"
           type="text"
           placeholder="Source IP"
           value={sourceIP}
           onChange={(e) => setSourceIP(e.target.value)}
         />
         <input
           className="w-full p-2 border border-gray-300 rounded mb-2"
           type="text"
           placeholder="Destination IP"
           value={destinationIP}
           onChange={(e) => setDestinationIP(e.target.value)}
         />
         <select
           className="w-full p-2 border border-gray-300 rounded mb-2"
           value={protocol}
           onChange={(e) => setProtocol(e.target.value)}
         >
           <option value="TCP">TCP</option>
           <option value="UDP">UDP</option>
         </select>
         <input
           className="w-full p-2 border border-gray-300 rounded mb-2"
           type="text"
           placeholder="Port"
           value={port}
           onChange={(e) => setPort(e.target.value)}
         />
         <button
           className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
           onClick={handleSimulate}
         >
           Simulate Traffic
         </button>
       </div>
     );
   };

   export default TrafficSimulator;
   
