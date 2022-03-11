import React from "react";

// components

import CardTable from "components/Cards/CardTable";



export default function Port() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
         Port
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>

      </div>
  
    </>
  );
}
