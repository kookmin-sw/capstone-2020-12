import React from 'react'
import ReactCompareImage from 'react-compare-image'
import { Typography } from 'antd'

const { Title } = Typography

// images
const before = 'https://topazlabs.com/wp-content/uploads/2019/07/julia-anna-gospodarou-after.jpg'
const after = 'https://topazlabs.com/wp-content/uploads/2019/07/julia-anna-gospodarou-before.jpg'
const logo = 'https://github.com/kookmin-sw/capstone-2020-12/blob/master/doc/image/logo_white.png?raw=true'

// css
const topDiv = { background: 'linear-gradient(#16355F 70%, white 30%)', paddingTop: 90, paddingBottom: 70 }
const image = { display: 'block', maxWidth: '40%', maxHeight: 40, width: 'auto', height: 'auto', margin: 'auto' }
const title = {
  color: 'lightGray',
  paddingTop: 15,
  textAlign: 'center',
  fontSize: 24,
  letterSpacing: '0.01em',
  fontWeight: 200
}
const beforeAfterSlider = { width: '60%', margin: 'auto', paddingTop: 50 }

function ServiceIntroPage () {
  return (
    <div style={topDiv}>
      {/* logo Image */}
      <img src={logo} style={image}/>

      {/* slogan */}
      <Title level={3} style={title}>그 때 그 시간을 다시 생생하게</Title>

      {/* before after slide */}
      <div style={beforeAfterSlider}>
        <ReactCompareImage leftImage={before} rightImage={after}/>
      </div>

    </div>
  )
}

export default ServiceIntroPage