   // src/components/RuleEditor.js
   import React, { useState } from 'react';

   const RuleEditor = ({ onAddRule }) => {
     const [rule, setRule] = useState('');

     const handleAddRule = () => {
       if (rule.trim()) {
         onAddRule(rule);
         setRule('');
       }
     };

     return (
       <div className="mb-4">
         <h2 className="text-lg font-bold">Firewall Rule Editor</h2>
         <textarea
           className="w-full p-2 border border-gray-300 rounded"
           rows="3"
           value={rule}
           onChange={(e) => setRule(e.target.value)}
           placeholder="Enter firewall rule (e.g., ALLOW TCP FROM 192.168.1.1 TO ANY PORT 22)"
         />
         <button
           className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
           onClick={handleAddRule}
         >
           Add Rule
         </button>
       </div>
     );
   };

   export default RuleEditor;
   
