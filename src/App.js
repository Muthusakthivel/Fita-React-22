import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './components/form';
import HomePage from './pages/home';
import About from './pages/about';

// ES6
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='' element={<HomePage/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='form' element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
// ES5
// function App() {
//   const message = "Hello React";
//   return (
//     <div className="App">
//       <h3>Welcome to {message}</h3>
//     </div>
//   );
// }

export default App;
