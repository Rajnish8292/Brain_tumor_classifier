'use client'
import { NavAtom } from "@/assests/atoms/NavAtom";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { SiJupyter } from "react-icons/si";
import { LuDot } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap, {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
export default function Page() {
    const [currPage, setCurrPage] = useRecoilState(NavAtom)
    const downloadRef = useRef()

    useGSAP(() => {
        const donwloadElements = downloadRef.current.children

        for(let i = 0; i < donwloadElements.length; i++) {
            const downloadElem = donwloadElements[i]

            gsap.from(downloadElem, {
                scale: 0.8,
                opacity: 0.2,
                scrollTrigger: {
                    trigger: downloadElem,
                    start: 'top bottom',
                    end: 'bottom 80%',
                    scrub:true
                }
            })

            // const tl = gsap.timeline({
            //     scrollTrigger: {
            //         trigger:downloadElem,
            //         start: 'top bottom',
            //         bottom: 'bottom top-=100px',
            //         scrub: true
            //     }
            // })

            // tl.from(downloadElem, {
            //     scale: 0.7,
            //     opacity:0.2
            // })
            // tl.to(downloadElem, {
            //     scale: 1,
            //     opacity:1
            // })
            // tl.to(downloadElem, {
            //     scale: 0.7,
            //     opacity:0.2
            // })


        }
    })
    useEffect(() => {
        setCurrPage('downloads')
    })
    return (<>
        <section ref={downloadRef} className="downloads center">

            <div className="download-container" style={{marginTop:'50vh'}}>
                <div className="download-logo center">
                    <SiJupyter style={{fontSize: '72px',color:'var(--color-complementary)' }} />
                </div>
                <div className="download-description">
                    <div className="dowload-title">Main workflow jupyter notebook</div>
                    <div className="download-subtitle">It's the jupyter file which contains all the code of deep learning model.</div>
                    <div className="download-button">
                        Download
                    </div>
                </div>
            </div>


            <div className="download-container">
                <div className="download-logo center">
                    <SiJupyter style={{fontSize: '72px',color:'var(--color-complementary)' }} />
                </div>
                <div className="download-description">
                    <div className="dowload-title">Preprocessing of dataset jupyter notebook</div>
                    <div className="download-subtitle">It's the jupyter file that converts all images from RGB to Grayscale format.</div>
                    <div className="download-button">
                        Download
                    </div>
                </div>
            </div>


            <div className="download-container">
                <div className="download-logo center">
                    <FaDatabase style={{fontSize: '72px',color:'var(--color-complementary)' }} />
                </div>
                <div className="download-description">
                    <div className="dowload-title">Original Brain tumor dataset</div>
                    <div className="download-subtitle">Zip folder contains all dataset before it's been preprocessed.</div>
                    <div className="download-button">
                        Download
                    </div>
                </div>
            </div>

            <div className="download-container">
                <div className="download-logo center">
                    <FaDatabase style={{fontSize: '72px',color:'var(--color-complementary)' }} />
                </div>
                <div className="download-description">
                    <div className="dowload-title">Preprocessed Brain tumor dataset</div>
                    <div className="download-subtitle">Zip folder that contains preprocessed and well organized dataset.</div>
                    <div className="download-button">
                        Download
                    </div>
                </div>
            </div>


            <div className="download-container">
                <div className="download-logo center">
                    <FaFileAlt style={{fontSize: '72px',color:'var(--color-complementary)' }} />
                </div>
                <div className="download-description">
                    <div className="dowload-title">Deep learning Keras model</div>
                    <div className="download-subtitle">It the custom deep learning sequential model . Trained with 1000 epoch</div>
                    <div className="download-button">
                        Download
                    </div>
                </div>
            </div>


            <div className="download-container" style={{marginBottom:'50vh'}}>
                <div className="download-logo center">
                    <FaFileAlt style={{fontSize: '72px',color:'var(--color-complementary)' }} />
                </div>
                <div className="download-description">
                    <div className="dowload-title">Deep learning model (Inception ResNetV2)</div>
                    <div className="download-subtitle">InceptionResNetv2 is a convolutional neural architecture. Got the same accuracy as the custom deep learning model </div>
                    <div className="download-button">
                        Download
                    </div>
                </div>
            </div>




        </section>
    </>)
}