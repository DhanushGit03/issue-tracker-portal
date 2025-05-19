import React, { useState } from 'react';
import IssueForm from './backend/components/IssueForm';
import IssueList from './backend/components/IssueList';

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