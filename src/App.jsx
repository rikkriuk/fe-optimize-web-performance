import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DynamicImport from "./pages/DynamicImport";
import ImportOnVisibility from "./pages/ImportOnVisibility";
import ListVirtualization from "./pages/ListVirtualization";
import BlogDetail from "./pages/BlogDetail";
import Cache from "./pages/Cache";

export default function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <span className="navbar-brand">Navbar</span>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link to={"/"}>Home</Link>
            </li>

            <li className="nav-item me-3">
              <Link to={"/dynamic-import"}>Dynamic Import</Link>
            </li>

            <li className="nav-item me-3">
              <Link to={"/import-on-visibility"}>Import On Visibility</Link>
            </li>

            <li className="nav-item">
              <Link to={"/list-virtualization"}>List Virtualization</Link>
            </li>

            <li className="nav-item">
              <Link to={"/cache"}>Cache</Link>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dynamic-import" element={<DynamicImport />} />
        <Route path="/import-on-visibility" element={<ImportOnVisibility />} />
        <Route path="/list-virtualization" element={<ListVirtualization />} />
        <Route path="/blog/detail/:id" element={<BlogDetail />} />
        <Route path="/cache" element={<Cache />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};