import React from 'react';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="container-fluid">
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
