'use client'

import { NavAtom } from "@/assests/atoms/NavAtom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Page() {
    const [currPage, setCurrPage] = useRecoilState(NavAtom)

    useEffect(() => {
        setCurrPage('classifier')
    })
    return (<h1>Classifier</h1>)
}