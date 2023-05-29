import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";

export default function story() {
    return (
        <div>
            <Header />
            <div className='mt-14 flex justify-center  '>
                <img className=' chinesse mr-10' src='./p1.webp' />
                <img className='eyes' src='./eyez.webp' />
                <img className='chinesse ml-10' src='./p2.webp' />
            </div>
            <div className='mt-10 flex justify-center'>
                <div className=''>
                    <p className='story_head_text'>WHO ARE WE </p>
                    <p className='story_sub_text mt-4'>PEACE, LOVE AND </p>
                    <p className='story_sub_text'>ICONIC ANIME FOODS</p>
                </div>

                <div className='story_main_text'>
                    <p className='mt-4'>We returned to our roots to finally build the company
                        of our dreams — one that proudly reclaims + celebrates the multitudes to be found in Asian flavors!</p>
                    <p className='mt-4'>THE CULT — is our little haven, as a place to give back to our community the best way we know how: by
                        giving you a place to meet, share stories and create memories.</p>
                    <p className='mt-4'>This is our fiery love letter to our otaku (and everyone else), our food, and our favourite caracters of
                        anime.</p>
                    <p className='mt-4'> Pull up a stool and grab a bowl . Welcome to our house.</p>
                    <p className='welcome_cult'>Team THE CULT x</p>
                </div>
            </div>
            <div class="container">
                <div className='flex moving_img'>
                    <img src='./right.webp' />
                    <img src='/left.webp' />
                </div>
                <div className='barsr'>
                    <img  src='./bar.webp' />

                </div>
            </div>
            <Footer />

        </div>
    )
}
