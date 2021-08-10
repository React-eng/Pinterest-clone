import React from 'react';
import styled from 'styled-components';
import Pin from "./Pin.js";
import "./Mainboard.css"

function Mainboard(props) {
  let { pins } = props;

    return (
        
              <Wrapper>
                  <Container className="mainboard__container">
                  {pins.map((pin, index) => {
                    let {urls} = pin;
                    return <Pin key={index} urls ={urls}/>
                  })}
                </Container>
              </Wrapper>

            
        
    )
}

export default Mainboard
const  Wrapper = styled.div`
background-color: white;

justify-content: center;
height: 100%;
width: 100%;
margin-top: 5px;

`
const Container = styled.div`

background-color: white;
column-count: 5;
margin: 0 auto;
height: 100%;
column-gap: 5px;
max-width: 1260px;
`
