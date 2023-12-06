import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListView from './components/UserListView';
import UserDetailView from './components/UserDetailView';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Clouda Assignment</h1>
        <Routes>
          <Route path="/" element={<UserListView />} />
          <Route path="/:userId" element={<UserDetailView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

