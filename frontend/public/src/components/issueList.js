import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IssueList() {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    const response = await axios.get('http://localhost:5000/api/issues');
    setIssues(response.data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <ul>
      {issues.map(issue => (
        <li key={issue.id}>
          <h4>{issue.title}</h4>
          <p>{issue.description}</p>
          <small>Status: {issue.status} | Created: {new Date(issue.created_at).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
}

export default IssueList;