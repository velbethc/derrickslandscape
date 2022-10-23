import React from 'react';
import './App.css';
import { Footer, Blog, Features, Header, Possibility, Whatdl } from './containers';
import { Cta, Brand, Navbar } from './components';


const App = () => {
    return (
        <div className= 'App'>
            <div className="gradient_bg">
            <Navbar />
            <Header />
            </div>
             <Brand />
             <Whatdl />
             <Features />
             <Possibility />
             <Cta />
             <Blog />
             <Footer />
        </div>
    )
}

export default App