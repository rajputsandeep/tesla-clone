import React, { useState } from 'react'
import { selectCars} from '../features/car/carSlice'
import { useSelector }  from 'react-redux'
import styled  from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header() {
    
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
console.log(cars);
    return (
        <Container>
        <a>
          <img src= "/images/logo.svg" />  
        </a>  
        <Menu>
            {cars && cars.map((car, index) =>(

               <a key={index} href="#"> {car}</a> 
            ))}
  
           <a href="#">Solar Panel</a> 
           <a href="#">Solar Roof</a>
        </Menu>

            <RightMenu>
            <a href="#">Shop</a>
                <a href="#">Account</a>                
                </RightMenu> 
                <CustomMenu onClick = { () => setBurgerStatus(true) }/>
              
                <BurgerNav show = {burgerStatus}>
                    <CloseWrapper >
                     <CustomClose onClick = { () => setBurgerStatus(false)}/>
                     </CloseWrapper>
                     {cars && cars.map((car, index) =>(

                    <li key={index}><a href="#"> {car}</a> </li>
))}
                <li><a href="#"> Solar Panels</a></li>
                <li><a href="#"> Solar Roof</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
align-items:center;
justify-content: space;
display:flex;
top:0;
left:0;
right:0;
z-index:1;
`

const Menu = styled.div`
display:flex;
align-items;center;
flex:1;
justify-content:center;
a{
    font-weight:600;
    text-decoration:uppercase;
    padding:0 10px;
}
@media(max-width: 768px){
    display:none;
}

`

const RightMenu = styled.div`
display:flex:
align-items:center;
a{
    font-weight:600;
    text-decoration:uppercase;
    padding:0 10px;
    margin-right:10px;
}
`
const CustomMenu= styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background:#ffffff;
width:300px;
z-index:16;
list-style:none;
padding:20px;
flex-direction:column;
transition:transform 0.2s;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
text-align:start;
li{
    padding: 5px;
  
    a{
        font-weight:600;
    }
    margin-top:30px;
    &:hover {
        background: #e8e8e8;
      }
      padding-left:10px;
      border-radius:5px;
}
`

const CustomClose = styled(CloseIcon)`


`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
&:hover {
    background: #e8e8e8;
  }
  border-radius:5px;
  float:right;


`