import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

//   useEffect(() => {
//     let t = 0;
//     for (let i = 0; i < 1e8; i++) {
//       t += i;
//     }
//     setD(t);
//   }, []);


// Cursor solutions
  useEffect(() => {
    const worker = new Worker("/worker.js");
    worker.onmessage = function(e) {
      setD(e.data);
    };
    worker.postMessage("start");
    return () => worker.terminate();
  }, []);

// Gemini solutions
//   useEffect(() => {
//     // Create a new worker instance
//     const worker = new Worker('/worker.ts');

//     // Listen for messages from the worker
//     worker.onmessage = (event: MessageEvent<number>) => {
//       setD(event.data);
//     };

//     // Start the worker
//     worker.postMessage('start');

//     // Clean up by terminating the worker when the component unmounts
//     return () => {
//       worker.terminate();
//     };
//   }, []);

  return <div className=" p-10 font-medium">Task 3 = {d}</div>;
}
