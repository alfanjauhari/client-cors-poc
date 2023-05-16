import './App.css';
import { useCallback, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080', {
        headers: {
          Authorization: 'Basic YWRtaW46YWRtaW4=',
        },
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message from fetch : {message}</h1>
        <button onClick={fetchData}>
          {loading ? 'Loading' : 'Click to fetch'}
        </button>
      </header>
    </div>
  );
}

export default App;
