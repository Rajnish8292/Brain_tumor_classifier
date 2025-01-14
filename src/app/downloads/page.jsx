'use client'
import { NavAtom } from "@/assests/atoms/NavAtom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";


export default function Page() {
    const [currPage, setCurrPage] = useRecoilState(NavAtom)

    useEffect(() => {
        setCurrPage('downloads')
    })
    return (<h1>Download</h1>)
}