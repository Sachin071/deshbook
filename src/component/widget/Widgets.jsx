import React from 'react'

const Widgets = () => {
  return (
    <div className="fb__widgets">
        <iframe src="https://cubic-bezier.com/#0,1.69,1,-0.85"
            scrolling = "no"
            width="300"
            height="100%"
            style={{border : "none",overflow : 'hidden',}}
            frameborder="0"
            allowTransparency ='true'
            allow='encrypted-media'
            >

        </iframe>
    </div>
  )
}

export default Widgets