import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-around'>
            <div className='flex justify-between'>
                <p className='header_element'>MENU</p>
                <p className='header_element'>BOOKINGS</p>
                <p className='header_element'>FOR GUEST</p>
            </div>
            <img className='logo' src='./home/lg3.png' />
            <div className='flex justify-around'>
                <p className='header_element'>OUR STORY</p>
                <p className='header_element'>CONTACT-US</p>
                <p className='header_element'>1</p>
            </div>
        </div>
    )
}
