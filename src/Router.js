import { BrowserRouter as RouterContainer, Routes, Route} from "react-router-dom";

import React from 'react'
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Navbar from "./Components/Navbar";


export default function Router() {
  return (
    <RouterContainer>
        <Navbar/>
        <Routes>
            <Route path='*' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
        </Routes>
    </RouterContainer>
  )
}
