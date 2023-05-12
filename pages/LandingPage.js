import React from "react";
import Header from '../components/Header'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function LandingPage() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div>
      <Header />
      <div className='flex justify-around '>
        <img className='mon' src='https://ik.imagekit.io/ioj0dl8lm/monster.svg?updatedAt=1682811656521' />
        <div className='hero_text' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <p className='hero_subtext'>You have watched it, now you can taste it</p>
          <p className='hero_mainText'>BRINGING ANIME</p>
          <p className='hero_mainText_2'>FOOD TO LIFE</p>
        </div>

        <img className='mon' src='https://ik.imagekit.io/ioj0dl8lm/boy.svg?updatedAt=1682811631584' />
      </div>
      <div className='flex second_page justify-between '>
        <div className='flex second_page_book justify-between '>
          <img className='knife' src='./knife.png' />
          <div className='second_page_text'>
            <p className='second_page_book_head'>GATHER IN</p>
            <p className='second_page_book_head'>GOOD COMPANY</p>
            <div className='second_page_book_sub'>
              <p>Amet nulla qui ut culpa veniam. Irure laborum ipsum qui <br /> laboris ex proident
                nulla ad minim mollit. Id dolor officia eiusmod consectetur <br /> fugiat enim veniam
                incididunt minim aute irure dolore sint duis.</p>
            </div>
            <button className='second_page_book_btn'>
              BOOK YOURSELF IN
            </button>
          </div>
        </div>
        <img className='hero2_img' src='https://ik.imagekit.io/ioj0dl8lm/second_frame.webp?updatedAt=1682811877648' />
      </div>
      <div className='flex justify-between menu_item'>
        <img className='noodles_black' src='./noodle_black.webp' />
        <img className='noodles_black' src='./ramen.webp' />
        <div>
          <div className=''>
            <p className='second_page_book_head'>GATHER IN</p>
            <p className='second_page_book_head'>GOOD COMPANY</p>
            <div className='menu_text'>
              <p>Amet nulla qui ut culpa veniam. Irure laborum ipsum qui <br /> laboris ex proident
                nulla ad minim mollit. Id dolor officia eiusmod consectetur <br /> fugiat enim veniam
                incididunt minim aute irure dolore sint duis.</p>
            </div>
            <button className='menu_book_btn'>
              BOOK YOURSELF IN
            </button>
          </div>
          <div className='flex justify-around'>
            <img className='start_desert' src='./desert.webp' />
            <img className='start_desert' src='./start.webp' />
          </div>
        </div>
      </div>
      <div className='flex justify-around dish'>
        <img className='fodd' src='./dishes.webp' />
        <img className='fodd' src='./cat.webp' />
        <img className='fodd' src='./toro.webp' />
        <img className='fodd' src='./noodls.webp' />
      </div>
      <div className='zuko flex justify-between'>
        {/* <div className='chop'>
          <img className='c1' src='./stick.png' />
          <img className='c2' src='./stick.png' />
        </div> */}

        <div className='second_page_tex'>
          <p className='second_page_book_head'>GATHER IN</p>
          <p className='second_page_book_head'>GOOD COMPANY</p>
          <div className='second_page_book_sub'>
            <p>Amet nulla qui ut culpa veniam. Irure laborum ipsum qui <br /> laboris ex proident
              nulla ad minim mollit. Id dolor officia eiusmod consectetur <br /> fugiat enim veniam
              incididunt minim aute irure dolore sint duis.</p>
          </div>
          <button className='second_page_book_btn'>
            BOOK YOURSELF IN
          </button>
        </div>
        <img className='cook' src='./pan.webp' />
        <img className='chicken' src='./chiken.webp' />

      </div>
      <div>
        <p className='books mt-10'>WHETHER YOU ARE VACTIONING ALONE , OUT WITH</p>
        <p className='books'>FRIEND , OR PLANNING A HOLIAY PARTY, WE ARE</p>
        <p className='books'>SURE WE CAN ACCOMMODATE YOU</p>
        <div className='bot'>
          <button className='second_page_book_btn '>
            BOOK YOURSELF IN
          </button>
        </div>
        <div className='test'>
          <div className='items'>
            <div className='flex justify-center '>
              <img className='frame catty' src='./catty.webp' />
              <img className='frame photo mt-10' src="./photo.png" />
              <img className='frame  na mt-14' src="./na.png" />
              <img className='frame peace mt-10' src='./peace.webp' />
              <img className='frame fox' src='./fox.webp' />

            </div>

          </div>
          <div className='flex swords  justify-center'>
            <img className='sword' src='./sword1.png' />
            <img className='sword' src='./sword.png' />
          </div>
          {/* <div className='flex swords justify-center'>
            <img className='sword' src='./sword1.png' />
            <img className='sword' src='./sword.png' />
          </div> */}
        </div>
      </div>
      <div className='cha'>
        <div className='flex justify-around'>
          <img className='small' src='./l1.webp' />
          <img className='small' src='./l2.webp' />
        </div>
        <div className='flex justify-around'>
          <img className='big mr-14' src='./l3.webp' />
          <img className='big ml-14' src='./l4.webp' />
        </div>
      </div>
      <div>

      </div>
      <div className="carousel">
        <Slider {...settings}>
          <div >
            <img src="./fr1.webp" />
          </div>
          <div  >
            <img src="./fr2.webp" />
          </div>
          <div  >
            <img src="./fr3.webp" />
          </div>
          <div  >
            <img src="./fr4.webp" />
          </div>
          <div  >
            <img src="./fr5.webp" />
          </div>
          <div  >
            <img src="./fr7.webp" />
          </div>
          <div  >
            <img src="./fr8.webp" />
          </div>
        </Slider>
      </div>
      <div className="flex justify-around newsletter">
        <img className="fr" src="./fr6.webp" />

        <div className="subs">
          <p className="subscribe">SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className="subscribe">GET LATEST NEWS AND UPDATES</p>
          <div className="flex mt-10">
            <input className="input_bar" />
            <input className="input_bar ml-4" />
            <button className='sub_btn ml-4'>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <img className="fr" src="./chan.webp" />

      </div>
      <hr className="line mt-4 mb-14" />
      <div className="flex justify-around">
        <img src="./lg5.png" />
        <div>
          <p className="footer_head">ADDRESS</p>
          <p>43, cole street Fadeyi</p>
          <p>Lagos, ,Nigeria</p>
        </div>
        <div>
          <p className="footer_head">OPENNING HOURS</p>
          <p>Mondays - Friday 10am - 5pm</p>
          <p>Saturday - Sunday 12 noon - 5pm</p>
        </div>
        <div>
          <p className="footer_head">CONTACT</p>
          <p>Calebomojuwon@gmail.com</p>
          <p>+234 816 235 3857</p>
        </div>
      </div>
    </div>
  )
}