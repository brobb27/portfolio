import React from 'react'
import { FaReact, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { SiExpress, SiMongodb, SiJavascript } from 'react-icons/si'
import { MdHttp } from 'react-icons/md'

function Header() {
    return (
        <div id='header'>
            <div>
                <h2>Hi, my name is Blair Robbins</h2>
                <div id='gridContainer'>
                    <div><FaReact className='headerIcon'/></div>
                    <div><FaHtml5 className='headerIcon'/></div>
                    <div><FaNodeJs className='headerIcon'/></div>
                    <div><IoLogoCss3 className='headerIcon'/></div>
                    <div><SiExpress className='headerIcon'/></div>
                    <div><SiJavascript className='headerIcon'/></div>
                    <div><MdHttp className='headerIcon'/></div>
                    <div><SiMongodb className='headerIcon'/></div>
                </div>
                <div id='contactButton'>
                    <a href='#contact' className=''>Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Header