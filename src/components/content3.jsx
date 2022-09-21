import React from 'react'
import {ContentTh,ContentFh, Sleft,Sright} from './style'
import Spic from '../assets/IMAGE (3).svg'
import Spic4 from '../assets/IMAGE (4).svg'

const Content3 = () => {
  return (
    <>
<ContentTh>
    <Sleft>
      <h3>Aenean Consectetur</h3>
      <h1>S</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
    </>
  )
}

export default Content3