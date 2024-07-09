import React from "react";


export const PlusIcon = ({ width = "2rem", height = "2rem" , fill = "#f2f2f2" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill, width ,height}}>
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </svg>
  );
};
