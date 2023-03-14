import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/nav-bar";
import Dashboard from "./pages/dashboard";
import TicketPage from "./pages/ticket-page";

//functional expression
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/ticket' element={<TicketPage/>}/>
          <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
