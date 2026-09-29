import React from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
    return ( <>
    <NavBar/>
    <h1>SupportPage</h1>
    <Hero/>
    <CreateTicket/>
    <Footer/>
    </> );
}

export default SupportPage;