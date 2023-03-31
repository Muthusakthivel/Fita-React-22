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
import User from './pages/user';
import UpdateUser from './pages/update-users';
import AccountCreatePage from './pages/account-create';
import SimpleForm from './components/simple-form';
import ParentPage from './pages/parent';
import ChildPage from './pages/child';

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
        <Route path='account' element={<AccountCreatePage />}></Route>
        <Route path='update' element={<UpdateUser />}></Route>
      </Route>
      <Route path='register' element={<RegisterPage/>}></Route>
      <Route path='user' element={<User/>}></Route>
      <Route path='simpleform' element={<SimpleForm/>}></Route>
      <Route path='parent' element={<ParentPage />}></Route>
      <Route path='child' element={<ChildPage />}></Route>
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
