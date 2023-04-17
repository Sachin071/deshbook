import React from 'react'

function SidebarRow({title,src,source}) {
  return (
    <div className='fb__sidebarRow'>
        {source && <img src={source} alt="imagesss" />}     
        {src &&  <i class={src} />}
        <h4>{title} </h4>
    </div>
  )
}

export default SidebarRow