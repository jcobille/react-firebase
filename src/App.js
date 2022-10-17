import React from "react";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UsersList from "./component/UsersList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;