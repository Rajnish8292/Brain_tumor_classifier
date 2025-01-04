'use client'

import { TfiArrowTopRight } from "react-icons/tfi";


import BrainModel from "@/component/BrainModel/BrainModel";


export default function Home() {
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

      </>
  )
}
