import React, { useState } from 'react';
import '../css/todo-form.css'

function CreateTodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server, display message)
    const data = {
      title: title,
      description: description
    }
    const url = process.env.REACT_APP_BACKEND_URL
    const options = {
        method: 'POST',
        'Access-Contol-Allow-Origin': '*',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
    
    try {
        const response = await fetch(url, options);
    
        if (response.ok) {
          const responseData = await response.json();
          console.log('API response:', responseData);
        } else {
          console.error('API request failed:', response.status);
        }
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
    }
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <label htmlFor="title">Task Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="description">Task Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateTodoForm;