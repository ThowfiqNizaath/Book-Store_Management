import React from "react";
import Home from './pages/Home'
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    // <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    // </ContextProvider>
  );
};

export default App;
