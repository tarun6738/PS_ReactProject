import {Routes,Route} from 'react-router-dom';
import Homebody from './Homebody';
import './Header.css';
import Researchareas from './Researchareas';
import University from './University';
import ContactUs from './ContactUs';

import LoginSignupPage from './LoginSignupPage';

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Homebody/>}></Route>
        <Route path="/Researchareas" element={<Researchareas/>}></Route>
        <Route path="/University" element={<University/>}></Route>
        <Route path="/Contactus" element={<ContactUs/>}></Route>
        <Route path="/LoginSignupPage" element={<LoginSignupPage/>}></Route>

      </Routes>
    </div>
  );
}
export default App;