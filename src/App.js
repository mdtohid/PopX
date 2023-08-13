import './App.css';
import Account from './Component/Account/Account';
import Signin from './Component/Signin/Signin';
import SignUp from './Component/SignUp/SignUp';
import AccountSetting from './Component/AccountSetting/AccountSetting';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Account/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/accountSetting" element={<AccountSetting/>}/>
      </Routes>
    </div>
  );
}

export default App;
