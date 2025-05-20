import React, { useState } from 'react';
import IssueForm from './components/IssueForm';
import IssueList from './components/IssueList';

function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div>
      <h1>Issue Tracker</h1>
      <IssueForm onAdd={() => setRefresh(!refresh)} />
      <IssueList key={refresh} />
    </div>
  );
}

export default App;
