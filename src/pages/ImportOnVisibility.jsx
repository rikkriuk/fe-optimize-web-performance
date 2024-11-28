import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const HeavyComponent = lazy(() => import("../components/HeavyComponent"));

export default function ImportOnVisibility() {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   return (
      <>
         <h1>Import on Visibility</h1>
         <div style={{ height: "150vh" }}></div>
         <div ref={ref}>
            { inView && (
               <Suspense fallback={<div>Loading...</div>}>
                  <HeavyComponent />
               </Suspense>
            )}
         </div>
      </>
   )
}