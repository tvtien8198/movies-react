
import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import { Routes } from './Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/loading-screen/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000)
  }, [])

  return (
      <BrowserRouter>
        {
          loading === true 
          ? (<Route render={props => (
            <>
                <Header {...props}/>
                <Routes/>
                <Footer />
            </>
          )}/>)
          : (<LoadingScreen />)
        }
      </BrowserRouter>
    
  );
}

export default App;
