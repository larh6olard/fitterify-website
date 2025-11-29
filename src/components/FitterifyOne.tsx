import React from 'react'
import HeroSection from './first_page/HeroSection'
import HealthOpt from './first_page/HealthOpt'
import AboutResolute from './first_page/AboutResolute'
import TheTeam from './first_page/TheTeam'
import PerformancePillar from './first_page/PerformancePillar'

const FitterifyOne: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <HealthOpt />
      <AboutResolute />
      <TheTeam />
      <PerformancePillar />
    </div>
  )
}

export default FitterifyOne
