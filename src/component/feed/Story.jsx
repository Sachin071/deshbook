import React from 'react'

const Story = ({image,profileSrc,title}) => {
  return (
    <div className='fb__story' style={{background : `url(${image})`}}>
        <img src={profileSrc} alt="image" 
        style={{height : '5rem',
            width:'5rem',
            margin : '1rem',
            border : '0.5rem solid #e5621b',
            borderRadius : '50%'
        }} />
        {/* <i class={profileSrc}></i> */}
        <h4>{title}</h4>
    </div>
  )
}

export default Story