import { Main } from "./Main";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList} from "./FriendList"

export const App = () => {
  return (
    <div>
      {/* <Main /> */}
      <Profile />
      <Statistics />
      <FriendList />
    </div>
  );
};
// export default App;
//   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template