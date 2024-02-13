import React from "react";

const Result = ({srcCode}) => {
  return (
    <div>
      <div className="bg-accent p-4 shadow mt-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2 text-primary">Result</h2>
        <iframe
          className="w-full h-60 bg-white rounded-md"
          srcDoc={srcCode}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Result;
