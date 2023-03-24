import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css'
import Navbar from './Navbar';
import Que1 from './System_test/Que1';
import Que2 from './System_test/Que2';
import Que3 from './System_test/Que3';
import Que4 from './System_test/Que4';
import Que5 from './System_test/Que5';
import Que6 from './System_test/Que6';
import Que7 from './System_test/Que7';
import Que8 from './System_test/Que8';
import Que9 from './System_test/Que9';
import Que10 from './System_test/Que10';
import Forms from './System_test/Forms';
function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar />}> </Route>
  <Route path='Que1' element={<Que1 />}> </Route>
  <Route path='Que2' element={<Que2 />}> </Route>
  <Route path='Que3' element={<Que3 />}> </Route>
  <Route path='Que4' element={<Que4 />}> </Route>
  <Route path='Que5' element={<Que5 />}> </Route>
  <Route path='Que6' element={<Que6 />}> </Route>
  <Route path='Que7' element={<Que7 />}> </Route>
  <Route path='Que8' element={<Que8 />}> </Route>
  <Route path='Que9' element={<Que9 />}> </Route>
  <Route path='Que10' element={<Que10 />}> </Route>
  <Route path='Form' element={<Forms />}> </Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
