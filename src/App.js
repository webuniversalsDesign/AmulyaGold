
import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Home from './Pages/Home';

function App() {
  return (
    <>

<BrowserRouter>
<Routes>
 <Route path="/" element={<Home/>}/>
</Routes>

</BrowserRouter>
    </>
  );
}

export default App;