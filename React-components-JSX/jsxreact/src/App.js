
import './App.css';
import Avatar from "./component/profile/profilephoto";
import Userfullname from"./component/profile/fullname";

import Adress from"./component/profile/address.js";

const avatarurl=" http://placekitten.com/g/64/64";
function App() {
  return (
    <div className="App">
      <Avatar user={{avatarUrl:avatarurl, name:"mohamed"}} />
      { <Userfullname user={{name:"sara"}} /> }
       < Adress user={{adress:"22one becker street"}}   /> 

    </div>
  );
}

export default App;
