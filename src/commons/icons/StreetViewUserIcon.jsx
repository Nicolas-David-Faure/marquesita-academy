import React from "react";

export const StreetViewUserIcon = ({width = "2rem", height= "2rem"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{fill : "#f2f2f2"  , width : width , height: height}}>
      <circle cx="12" cy="4" r="2"></circle>
      <path d="M12 18h2v-5h2V9c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v4h2v5h2z"></path>
      <path d="m18.446 11.386-.893 1.789C19.108 13.95 20 14.98 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.02.892-2.05 2.446-2.825l-.893-1.789C3.295 12.512 2 14.193 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-1.807-1.295-3.488-3.554-4.614z"></path>
    </svg>
  );
};


