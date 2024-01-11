import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai'; // Choose your preferred theme

const Playground = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const runCode = () => {
    // Here, you can execute/interpret the code using tools like eval or a code execution API
    // For example, using eval:
    try {
      const result = eval(code); // Execute the code
      setOutput(result.toString()); // Set the output
    } catch (error) {
      setOutput(error.toString()); // Set the output to the error message if code execution fails
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <AceEditor
          mode="javascript"
          theme="monokai"
          value={code}
          onChange={handleCodeChange}
          fontSize={14}
          width="100%"
          height="100%"
        />
      </div>
      <div className="p-4 bg-gray-200">
        <button
          onClick={runCode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Run Code
        </button>
        <div className="mt-4 bg-white p-4 border border-gray-300 h-40 overflow-y-auto">
          <h2>Output:</h2>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default Playground