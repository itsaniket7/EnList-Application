import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/about';

import Routes from './config/Routes';

import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
    return (
        <AuthContextProvider>
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <Routes/>
                    <About/>
                    {/* <Footer/> */}
                </>
            )}/>
            <Switch>
            <Route
                path='/signup'
                component={Signup}
            />
            <Route
                path='/login'
                exact
                component={Login}
            />
            {/* <Route
                path='/'
                exact
                component={Home}
            /> */}
            </Switch>
        </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
