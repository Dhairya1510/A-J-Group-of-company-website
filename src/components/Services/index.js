import React from 'react'
import Icon1 from '../../images/img2.svg'
import Icon2 from '../../images/img3.svg'
import Icon3 from '../../images/img4.svg'
import { ServicesContainer,
ServicesWrapper, ServicesH1, ServicesH2,
ServicesP, ServicesCard, ServicesIcon } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce expense</ServicesH2>
          <ServicesP>We help reduce your fess and etc bullshit...</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>in the service</ServicesH2>
          <ServicesP>edit this to owner pics and etc bullshit...</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>bla bla</ServicesH2>
          <ServicesP>owner and some pera BS may be remove</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
