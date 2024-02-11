'use client';

import { Footer } from 'flowbite-react';
import "./Footer.css"
import IconsFooter from '../IconsFooter/IconsFooter';

export default function FooterLot() {
  return (


    <Footer container className="bg-custombg text-white relative bottom-0 rounded-none" style={{ backgroundColor:"#F5F4F4", height:"100px", boxShadow: '0 -5px 5px -5px rgba(0, 0, 0, 0.575)' }}>
      <Footer.LinkGroup className='contact'>
        <Footer.Link href="#" style={{ color: "#005643",textDecoration: "none" }}>
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
      <IconsFooter />
      <Footer.Copyright className='fortune' by="Fortune Numbers™" year={2023} style={{ color: "#005643",textDecoration: "none" }} />

    </Footer>
  )
}


