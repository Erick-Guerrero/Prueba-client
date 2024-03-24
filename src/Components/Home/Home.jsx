import React from "react"
import DisplayNumbers from "../DisplayNumbers/DisplayNumbers";
import Navbar from "../Navbar/Navbar"
import FooterLot from "../Footer/Footer"

function Home() {

    return (
      <>
        <Navbar/>
        <DisplayNumbers style={{backgroundColor: "gray"}}/>
        <br></br>
        <FooterLot/>
      </>
    );
  }
  
  export default Home;