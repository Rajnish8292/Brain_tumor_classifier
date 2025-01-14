'use client'

import { useEffect, useRef, useState } from "react"
import { NavAtom } from "@/assests/atoms/NavAtom"
import { useRecoilState } from "recoil"
export default function TopNav() {
    const navRef = useRef()
    const [currPage, setCurrPage] = useRecoilState(NavAtom)


    return <>
        <div ref={navRef} className="nav">
            <div className={['nav-item', (currPage == 'home') ? 'active' : ''].join(' ')} data-name="home" onClick={() => {setCurrPage('home');window.location.assign('/')}}>Home</div>
            <div  className={['nav-item', (currPage == 'classifier') ? 'active' : ''].join(' ')} data-name="classifier" onClick={() => {setCurrPage('classifier');window.location.assign('/classifier')}}>Classifier</div>
            <div  className={['nav-item', (currPage == 'documentation') ? 'active' : ''].join(' ')} data-name="documentation" onClick={() => {setCurrPage('documentation');window.location.assign('/documentation')}}>Documentation</div>
            <div  className={['nav-item', (currPage == 'downloads') ? 'active' : ''].join(' ')} data-name="downloads" onClick={() => {setCurrPage('downloads');window.location.assign('/downloads')}}>Downloads</div>
            <div  className={['nav-item', (currPage == 'contact') ? 'active' : ''].join(' ')} data-name="contact" onClick={() => {setCurrPage('contact');window.location.assign('/contact')}}>Contact us</div>
        </div>
    </>
}