import React from 'react'

function Header() {
  return (
    <div className='fb__header'>
        <div className="fb__header-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png" alt="image uploaed soon" />
            <div className="fb__header-left__input">
                <i class="bi bi-search"></i>
                <input placeholder='Search Deshbook' type="text" />
            </div>
        </div>
        <div className="fb__header-middle">
            <div className="fb__header-middle__option fb__header-middle__option--active">
                <i class="bi bi-houses-fill"></i>
            </div>
            <div className="fb__header-middle__option ">
                <i class="bi bi-flag-fill"></i>
            </div>
            <div className="fb__header-middle__option ">
                <i class="bi bi-collection-play"></i>
            </div>
            <div className="fb__header-middle__option ">
                <i class="bi bi-shop-window"></i>
            </div>
            <div className="fb__header-middle__option ">
                <i class="bi bi-people-fill"></i>
            </div>

        </div>
        <div className="fb__header-right">
            <div className="fb__header-right__info">
                <i class="bi bi-person-circle"></i>
                <h4>Kapil</h4>
            </div>
            <button className='fb__header-right__button'><i class="bi bi-plus-square"></i></button>
            <button className='fb__header-right__button'><i class="bi bi-wechat"></i></button>
            <button className='fb__header-right__button'><i class="bi bi-bell-fill"></i></button>
            <button className='fb__header-right__button'><i class="bi bi-chevron-compact-down"></i></button>
        </div>
    </div>
  )
}

export default Header;