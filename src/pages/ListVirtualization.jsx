import React from "react";
import { FixedSizeList as List } from "react-window";

export default function ListVirtualization() {
   const item = Array.from({ length: 1000 }, (_, i) =>`Item ${i + 1}`);
   return (
      <>
         <h1>List Virtualization</h1>
         <ul>
            <List height={300} itemCount={item.length} itemSize={35} width={"100%"}>
               {({ index, style }) => (
                  <li style={style}>
                     {item[index]}
                  </li>
               )}
            </List>
         </ul>
      </>
   )
}