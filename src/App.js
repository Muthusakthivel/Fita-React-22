import React from 'react';
import './styles/ui-styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './components/form';
import HomePage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import RegisterPage from './pages/register';
import MailPage from './pages/mail';
import InboxPage from './pages/inbox';
import SentPage from './pages/sent';
import TrashPage from './pages/trash';

// ES6
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='' element={<HomePage/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='form' element={<Form/>}></Route>
      <Route path='mail' element={<MailPage/>}>
        <Route path='inbox' element={<InboxPage/>}></Route>
        <Route path='sent' element={<SentPage/>}></Route>
        <Route path='trash' element={<TrashPage/>}></Route>
      </Route>
      <Route path='register' element={<RegisterPage/>}></Route>
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
