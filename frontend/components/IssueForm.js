import React, { useState } from 'react';
import axios from 'axios';

function IssueForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/issues', { title, description, status });
    onAdd(response.data);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Issue Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Open</option>
        <option>Closed</option>
      </select>
      <button type="submit">Add Issue</button>
    </form>
  );
}

export default IssueForm;
