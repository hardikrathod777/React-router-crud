import React from 'react'
import './Home.css'
// import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function Home() {


    let { state } = useLocation();

    console.log("State", state);
    return (
        <>
            {/* <Container> */}
            <div className="img"></div>
                <div className="center">
                    <div className="title">Enjoy A Luxury</div>
                    <div className="sub_title">Experience</div>
                    <div className="btns">
                    <button>Learn More</button>
                    <button>Reant Rooms</button>
                    </div>
                </div>
            {/* </Container> */}
        </>
    )
}

export default Home