import React from "react";

export default (props) => {
  return (
    <div className="text-sm text-gray-500 bg-gray-100 p-2 rounded-md">
      Generating a random number 🧙‍♂️.
      {props.result && props.result.generatedNumber && (
        <span>
          The wizard has generated a random number:{" "}
          {props.result.generatedNumber}
        </span>
      )}
    </div>
  );
};
