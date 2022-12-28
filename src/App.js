// import './scss/user.scss'
import { createStore } from 'redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Users from './pages/Users'
import Home from './pages/Home'
import { Provider } from 'react-redux';
import useReducer from './store/reducer/user'

function App() {
  const store = createStore(useReducer)
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/users' element={<Users/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}


export default App;
