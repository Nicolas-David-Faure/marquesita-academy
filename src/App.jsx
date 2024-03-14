import { AboutmeMarquesita } from "./marquesita/comp/AboutmeMarquesita";
import { HomeMarquesita } from "./marquesita/comp/HomeMarquesita";

import { NavMarquesita } from "./marquesita/comp/NavMarquesita";

export function App (){



  return (

    <main>
      <NavMarquesita />
      <HomeMarquesita />
      <AboutmeMarquesita />
    </main>
  )
}