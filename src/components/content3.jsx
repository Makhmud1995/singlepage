import React from 'react'
import {ContentTh,ContentFh, Sleft,Sright,ContentFi,Humburger,Fi} from './style'
import Spic from '../assets/IMAGE (3).svg'
import Spic4 from '../assets/IMAGE (4).svg'
import Hum from "../assets/Page-1.svg"
import Hum1 from "../assets/Page-1.png"
import Hum2 from "../assets/Combined-Shape.svg"

const Content3 = () => {
  return (
    <>
<ContentTh>
    <Sleft>
      <h3>Aenean Consectetur</h3>
      <h1>S</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing eit. Suspendisse varius enim in eros elementum tristique.</p>
    </Sleft>
    <Sright src={Spic}></Sright>
    </ContentTh>
<ContentFh>
    <Sright src={Spic4}></Sright>
    <Sleft>
      <h3>Aenean Consectetur</h3>
      <h1>S</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </Sleft>
    </ContentFh>
    <ContentTh>
    <Sleft>
      <h3>Aenean Consectetur</h3>
      <h1>S</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </Sleft>
    <Sright src={Spic}></Sright>
    </ContentTh>
    <ContentFi>
      <Fi>
      <Humburger src={Hum}></Humburger>
      <h4>Activity Notifications</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </Fi>
      <Fi>
      <Humburger src={Hum1}></Humburger>
      <h4>Activity Notifications</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </Fi>
      <Fi>
      <Humburger src={Hum2}></Humburger>
      <h4>Activity Notifications</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </Fi>
    </ContentFi>
    </>
  )
}

export default Content3