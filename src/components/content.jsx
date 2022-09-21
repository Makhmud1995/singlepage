import React from 'react'
import { Content1,LargePic} from './style'
import Lpicture from "../assets/IMAGE (2).svg"

const Content = () => {
  return (
    <Content1>
      <p>Aenean Consectetur Porta</p>
      <h1>Nullam quis risus eget urna mollis ornare vel eu leo.</h1>
      <LargePic src={Lpicture}></LargePic>
    </Content1>
  )
}

export default Content