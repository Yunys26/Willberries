import React from 'react';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import NewArrival from './components/NewArrival';
import News from './components/News';

const App = () => (
    <React.Fragment>
        <Header />
        <News />
        <NewArrival />
        <Footer />
    </React.Fragment> 
)

export default App;