import Routes from './Components/Routes';
import UserContext from './Context/UserContenxt';
import GlobalStyles from './Styles/GlobalStyles';

function App() {
  return (
    <UserContext>
      <GlobalStyles />
      <Routes />
    </UserContext>
  );
}

export default App;
