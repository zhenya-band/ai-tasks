# Performance Improvement: Offload heavy computation to Web Worker

This PR addresses the high Total Blocking Time (TBT) identified in Lighthouse audits by moving a computationally intensive loop from the main thread to a Web Worker.

Previously, the `useEffect` hook in `Dashboard.tsx` contained a blocking loop that contributed significantly to the TBT, causing UI jank.

This fix involves:

- Creating `public/worker.js`: A new JavaScript file to house the heavy computation logic.
- Modifying `src/tasks/task3/Dashboard.tsx`:
    - Initiating a `Web Worker` and passing the `worker.js` file to it.
    - Listening for messages from the worker to update the component's state with the computation result.
    - Terminating the worker on component unmount for resource management.

By offloading this computation to a Web Worker, the main thread remains free, leading to a smoother user experience and improved Lighthouse performance scores.