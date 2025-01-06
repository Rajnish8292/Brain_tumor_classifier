'use client'

import { TfiArrowTopRight } from "react-icons/tfi";
import { HiMiniCpuChip } from "react-icons/hi2";
import { LuBrain } from "react-icons/lu";
import BrainModel from "@/component/BrainModel/BrainModel";
import Divider from "@/component/Divider/Divider";
import { FaBrain } from "react-icons/fa";
import { use, useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap, {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function scrollAnimation1(elem) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      toggleActions: 'restart none reverse none'
    }
  })

  tl.to(elem.children[0], {
    opacity: 0
  })
  .to(elem.children[1], {
    opacity: 1
  })
  .to(elem.children[2], {
    opacity: 1
  })
}
export default function Home() {
  const secondSection = useRef()
  const thirdSection = useRef()

  useGSAP(() => {
    scrollAnimation1(secondSection.current)
    scrollAnimation1(thirdSection.current)
  })

  return (
    <>
      <section className={['two_part_section'].join(' ')}>
       
        <div className='part center'>
          <div style={{fontSize:'var(--font-large)', width: '80%', fontWeight: 'bold'}}>Brain Tumor Classification</div>
          <div style={{fontSize:'var(--font-medium)', width: '80%', marginTop: '20px'}}>A deep learning model to detect different types of tumor in the brain using MRI scan with <b>72.06%</b> accuracy.<br></br>
          <div className='hover-button' style={{marginTop: '20px', display: 'inline-flex', justifyContent:'center',  alignItems:'center', flexDirection:'row'}}><p>Try It</p> <TfiArrowTopRight style={{marginLeft: '5px'}} /></div>
          </div>
          
        </div>
        <div className='part center'>
          <BrainModel />
        </div>
      </section>
      <Divider />
      <section ref={secondSection} className="center">
      <LuBrain style={{fontSize:'72px',position:'absolute'}} />
      
        <div style={{fontSize:'var(--font-very-large)', opacity: 0}}>Brain Tumor</div>
        <div style={{fontSize:'var(--font-medium)', width:'75%', marginTop:'40px', lineHeight:'33px', opacity: 0}}>A brain tumor occurs when a group of cells within the brain turn cancerous and grow out of control, creating a mass. The cause of most brain tumors is unknown, though up to 4% of brain cancers may be caused by CT scan radiation <br></br>Brain tumour cases are rising 'steadily' in India, and children account for 20 per cent of the increasing cases. In 2020, brain tumour was ranked as the 10th most common kind of tumour among Indians. The International Association of Cancer Registries (IARC) reported that there are over 28,000 cases of brain tumours reported in India each year and more than 24,000 people reportedly die due to brain tumours annually. </div>
      
      </section>

      <Divider />

      <section ref={thirdSection} className="center">
      <HiMiniCpuChip style={{fontSize:'72px', position:'absolute'}} />
 
      <div style={{fontSize:'var(--font-very-large)', opacity: 0}}>Brain Tumor Classifier</div>
      <div style={{fontSize:'var(--font-medium)', width:'75%', marginTop:'40px', lineHeight:'33px', opacity: 0}}>
      I developed a deep learning model capable of detecting and classifying brain tumors into four distinct categories: Glioma Tumor, Pituitary Tumor, Meningioma Tumor, and No Tumor. The model was trained on a dataset comprising 1,200 images across all categories and achieved an accuracy of 72.06%, demonstrating its ability to effectively differentiate between these tumor types based on medical imaging data
       </div>
  

      </section>

      <Divider />

      <section className="center contact">

      </section>

      </>
  )
}
