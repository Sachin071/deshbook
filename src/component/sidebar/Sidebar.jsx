import React from 'react'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='fb__sidebar'>
        <SidebarRow title='kapil' source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pF78B6YFE0EUucEB3DTkYCJwAjmyLXV3vAxSu2OOjrB_Ning5OUeHsJluyLC3H4xTho&usqp=CAU' />
        <SidebarRow title='Covid-19 information center' src="bi bi-plus-square-fill" />
        <SidebarRow title='Pages' src="bi bi-flag" />
        <SidebarRow title='Friends' src='bi bi-people' />
        <SidebarRow title='Messenger' src='bi bi-chat-left-dots-fill'/>
        <SidebarRow title='MarketPlace' src='bi bi-shop'/>
        <SidebarRow title='Videos' src='bi bi-file-earmark-play-fill'/>
        <SidebarRow title='More' src='bi bi-chevron-compact-down'/>
    </div>
  )
}

export default Sidebar