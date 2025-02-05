
'use client'

import { NavAtom } from "@/assests/atoms/NavAtom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function page() {
    const [currPage, setCurrPage] = useRecoilState(NavAtom)


    useEffect(() => {
        setCurrPage('contact')
    })

    return (<>
        <div className="contact">
            <div className="link-container center">
                <div className="wrapper">
                    <p style={{fontSize:'72px', fontWeight:'bold', marginBottom:'50px'}}> Wanna Chat ? </p>
                    <p style={{fontSize:'var(--font-large)'}}>rajnish81018@gmail.com</p>

                    <div className="links" style={{display:'flex', alignItems:'center', flexDirection:'row', marginTop:'60px'}}>
                        <div className="link" style={{marginRight:'10px',cursor:'pointer', marginLeft:'10px', fontSize:'var(--font-large)'}}><FaLinkedin /></div>
                        <div className="link" style={{marginRight:'10px',cursor:'pointer', marginLeft:'10px', fontSize:'var(--font-large)'}}><FaGithub /></div>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <div className="form">
                    <div className="input-field">
                        <input className="input-text" placeholder="name" onInput={(e) => {setName(e.target.value)}}></input>
                    </div>

                    <div className="input-field">
                        <input className="input-text" placeholder="email" onInput={(e) => {setEmail(e.target.value)}}></input>
                    </div>

                    <div className="input-field">
                        <textarea className="input-text" style={{resize:'none'}} placeholder="tell me about it!" onInput={(e) => {setMessage(e.target.value)}}></textarea>
                    </div>

                    <div className="send-button" onClick={() => {sendMessage()}}>send</div>
                    
                </div>
            </div>
        </div>
    </>)
}