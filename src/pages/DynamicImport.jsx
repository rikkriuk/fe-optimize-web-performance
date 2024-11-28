import React, { lazy, Suspense, useState } from "react";
// import HeavyComponent from "../components/HeavyComponent";
const HeavyComponent = lazy(() => import("../components/HeavyComponent"));

export default function DynamicImport() {
   const [isVisible, setIsVisible] = useState(false);
   const handleClick = () => {
      setIsVisible(!isVisible);
   }
   return (
      <>
         <h1>Dynamic Import</h1>
         <button onClick={handleClick}>Show Heavy Component</button>
         {/* { isVisible && (
            <HeavyComponent />
         )} */}
         { isVisible && (
            <Suspense fallback={<div>Loading...</div>}>
               <HeavyComponent />
            </Suspense>
         )}
      </>
   )
}