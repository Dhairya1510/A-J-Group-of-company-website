import React from 'react'
import Icon1 from '../../images/img2.svg'
import Icon2 from '../../images/img3.svg'
import Icon3 from '../../images/img4.svg'
import { ServicesContainer,
ServicesWrapper, ServicesH1, ServicesH2,
ServicesP, ServicesCard, ServicesIcon } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesP>Some of our services in which we are specialised</ServicesP>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Circuit Designing</ServicesH2>
          <ServicesP>We provide blueprint for printed circuit as per your preference.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Photography</ServicesH2>
          <ServicesP>We click all types of photography.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Graphic Designing</ServicesH2>
          <ServicesP>We provide 2D designs and few 3D designs.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Automation</ServicesH2>
          <ServicesP>Cutomized solutions for all types of automation.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Hardware Repairing</ServicesH2>
          <ServicesP>Repairing of computers/laptops and it's accessories.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Software Solution</ServicesH2>
          <ServicesP>Solving problems in installation and OS build.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
