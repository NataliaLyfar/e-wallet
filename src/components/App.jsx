import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { TestReduxComponent } from './TestReduxComponent/TestReduxComponent';

// import Home from './Home';
// const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./Home'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/login" element={<LoginPage />}></Route> */}
        {/* <Route path="/signup" element={<SignupPage />}></Route> */}
      </Route>
      <Route path="/redux-test" element={<TestReduxComponent />}></Route>
    </Routes>
  );
}

export default App;
