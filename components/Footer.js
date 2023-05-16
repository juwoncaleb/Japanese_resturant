import React from 'react'

export default function Footer() {
    return (
        <div>  <hr className="line mt-4 mb-14" />
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
            </div></div>
    )
}
