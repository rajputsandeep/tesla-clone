import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, description, leftBtntxt, rightBtntxt, backgroundImg}) {

    return (
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
           <Itemtext>
               <h1>{title}</h1>
               <p>    {description} </p>
            </Itemtext>
            </Fade>
    <Buttons>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtntxt}
                </LeftButton>
                {rightBtntxt &&
               <RightButton>
                   {rightBtntxt}
               </RightButton>
                }
            </ButtonGroup>
            </Fade>

            <DownArrow src= "images/down-arrow.svg">
</DownArrow>
</Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props =>`url('/images/${props.bgImage}')`} ;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Itemtext = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const ButtonGroup= styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width: 768px){
    flex-direction: column;
}

`


const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 14px;
cursor:pointer;
margin:8px;
   
`
const RightButton = styled(LeftButton)`
background:#ffffff;
opacity:.6;
color:#000;
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`
const Buttons = styled.div`

`