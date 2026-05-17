import React from 'react'
import Slider from './Slider'
import Counter from './Counter'
import About from './About'
import Services from './Services'
import OurAmenities from './OurAmenities'
import Property from './Property'
import Testimonial from './Testimonial'
import RentOffer from './RentOffer'
import ContactUs from './ContactUs'

const Home = () => {
    return (
        <div className="landing-page">
            {/* 1. Hero Section */}
            <Slider />
            
            {/* 2. Trust Badges / Counter */}
            <Counter />
            
            {/* 3. Introduction */}
            <About />
            
            {/* 4. Core Services */}
            <Services />
            
            {/* 5. Key Features */}
            <OurAmenities />
            
            {/* 6. Featured Listings */}
            <Property isFeatured={true} />
            
            {/* 7. Special Offers */}
            <RentOffer />
            
            {/* 8. Social Proof */}
            <Testimonial />
            
            {/* 9. Final CTA / Contact */}
            <ContactUs />
        </div>
    )
}

export default Home;