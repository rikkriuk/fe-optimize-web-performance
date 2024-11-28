import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
   const prefetchPage = () => {
      console.log("prefetching");
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = "/blog/detail/1";
      document.head.appendChild(link);
   }

  return (
   <div className="container">
      <h1>Home</h1>
      <Link to={"/blog/detail/1"} onMouseOver={prefetchPage}>blog 1</Link>
   </div>
  );
}