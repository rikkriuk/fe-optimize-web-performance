import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Cache() {
   const { data, error, isLoading } = useSWR("https://reqres.in/api/users/2", fetcher);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   return (
      <div>
         <h1>{data.data.title}</h1>
         <img src={data.data.thumbnail} alt={data.data.title} />
         <p>{data.data.description}</p>
         <ul>
            <li>Brand: {data.data.brand}</li>
            <li>Category: {data.data.category}</li>
            <li>Price: ${data.data.price}</li>
            <li>Rating: {data.data.rating}</li>
            <li>Stock: {data.data.stock}</li>
         </ul>
      </div>
   );
}