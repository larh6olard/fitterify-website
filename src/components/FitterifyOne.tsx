import React from 'react'
import HeroSection from './first_page/HeroSection'
import HealthOpt from './first_page/HealthOpt'
import AboutResolute from './first_page/AboutResolute'
import TheTeam from './first_page/TheTeam'
import PerformancePillar from './first_page/PerformancePillar'
import OptMap from './first_page/OptMap'
import WhyUsPage from './first_page/WhyUsPage'
import Footer from './first_page/Footer'
import ResoluteApp from './first_page/ResoluteApp'
import BloodTest from './first_page/BloodTest'
import Diagnostics from './first_page/Diagnostics'
import Pricing from './first_page/Pricing'
import Journey from './first_page/Journey'


const FitterifyOne: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <HealthOpt />
      <AboutResolute />
      <TheTeam />
      <PerformancePillar />
      <OptMap />
      <Pricing />
      <BloodTest />
      <Journey />
      <WhyUsPage />
      <ResoluteApp />
      <Diagnostics />
      <Footer />
    </div>
  )
}

export default FitterifyOne
