import React from 'react'
import { Content,Navbar,Logo,Menu,RightCon,LeftCon,ContentF } from './style'
import LogoP from '../assets/IMAGE.svg'
import Rimage from '../assets/IMAGE (1).svg'


const Container = () => {
  return (
    <Content>
        <Navbar>
            <Logo src={LogoP}>
            
            </Logo>
            <Menu>
                <p>About</p>
                <p>Featus</p>
                <p>How to Use</p>
                <p>Download</p>
            </Menu>
        </Navbar>
        <ContentF>
        <LeftCon>
            <h1>Momentum</h1>
            <h3>Launch your product — and savor the momentum.</h3>
            <button>Get the App</button>
        </LeftCon>
        <RightCon src={Rimage}></RightCon>
        </ContentF>
    </Content>
  )
}

export default Container