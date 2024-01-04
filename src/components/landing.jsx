import React from 'react'
import Hero from './hero';
import About from './about';
import Previous from './previous/previous_year';
import FAQPage from './FAQ/FAQ';
import Contact from './contact/contact';
import Footer from './Footer/Footer';
import Dash from './dash/dash';
import DashInd from './dash/dashInd';
export default function landing()
{
    return(<>
         <Hero />
      <About />
      <Previous />
      <FAQPage/>
      <Contact />
      <Footer />
      <DashInd/>
    </>);
}