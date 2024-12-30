# React useEffect Hook - Missing Dependency

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include necessary dependencies in the dependency array.  This can lead to unexpected behavior, especially when dealing with state updates.

The `bug.js` file showcases the incorrect implementation. The `useEffect` hook is missing `count` in its dependency array. This means that the `setInterval` is only created once, upon mounting, and never updated even when the `count` changes, resulting in incorrect behavior.

The `bugSolution.js` file provides the correct implementation, ensuring that the `setInterval` is cleaned up properly and that the `useEffect` hook re-runs whenever the count changes to ensure accurate updates.
