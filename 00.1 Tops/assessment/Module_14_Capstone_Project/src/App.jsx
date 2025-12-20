import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackTable from './components/FeedbackTable';
import './App.css';

function App() {
  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="display-4">Hotel Booking Management</h1>
        <p className="lead text-muted">Feedback System Dashboard</p>
      </header>
      
      <div className="row g-5">
        <div className="col-lg-5">
          <FeedbackForm />
        </div>
        <div className="col-lg-7">
          <FeedbackTable />
        </div>
      </div>
    </div>
  );
}

export default App;
