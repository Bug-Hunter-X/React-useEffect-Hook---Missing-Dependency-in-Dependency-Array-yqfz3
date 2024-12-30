```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
    // Added 'count' dependency to fix the issue
  }, [count]);

  return <div>Count: {count}</div>;
}
```