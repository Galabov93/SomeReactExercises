import React, { useState, useEffect } from "react";

export default function RefactoredFunction() {
  const [value, setValue] = useState<string>(
    localStorage.getItem("info") || ""
  );

  useEffect(() => {
    localStorage.setItem("info", value);
  }, [value]);

  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
}
