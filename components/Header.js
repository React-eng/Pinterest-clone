import React from 'react';
import PinterestIcon from "@material-ui/icons/Pinterest";
import { IconButton } from '@material-ui/core';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import FaceIcon from '@material-ui/icons/Face';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useState } from 'react';



function Header(props) {
    const[ input , setInput]= useState("")
    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
       
        
    }
    return (
        <div>
            <Wrapper>
                <LogoWrapper>
                    <IconButton>
                    <PinterestIcon/>
                    </IconButton>

                </LogoWrapper>
                
                <HomePageButton>
           
                    <a href="/">Homepage</a>
                 
                </HomePageButton>
                
               
                <FollowingButton>
               
                    <a href="/">Following</a>
                  

                </FollowingButton>
                
                <SearchWrapper>
                    <SearchBarWrapper>
                <IconButton>
                    <SearchIcon/>
                     </IconButton>
                     <form>
                         <input type="text" onChange={(e) => setInput(e.target.value)}/>
                             <button type="submit" onClick={onSearchSubmit}/>

                             
                         
                     </form>
                     
                     </SearchBarWrapper>
                </SearchWrapper>
                <IconsWrapper>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                
                <IconButton>
                <InsertCommentIcon/>
                </IconButton>
                <IconButton>
                    <FaceIcon/>
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>


                </IconsWrapper>
                
            </Wrapper>
        </div>
    )
}

export default Header
const Wrapper = styled.div`
display:flex;
align-items:center;
height:56px;
padding: 12px 4px 4px 16px;
background-color:white;
color:black;


`
const LogoWrapper = styled.div`
.MuiSvgIcon-root{
    color: red;
    font-size= 32px;
    cursor: pointer;
}
`
const HomePageButton = styled.div`
display: flex;
align-items:center;
height: 48px;
min-width: 123px;
justify-content: center;
border-radius: 24px;
cursor: pointer
background-color: blue;
a{
    text-decoration:none;
    color: black;
    font-weight: 700;
}
`
const FollowingButton = styled.div`
display:flex;

align-items:center;
height: 48px;
min-width: 123px;
justify-content: center;
border-radius: 24px;
cursor: pointer;
background-color: light grey;
a{
    text-decoration:none;
    color: black;
    font-weight: 700;

}
`
const SearchWrapper = styled.div`
flex: 1;
`
const SearchBarWrapper = styled.div`
background-color: #efefef;
display: flex;
height: 48px;
width: 100%;
border-radius: 50px;
border: none;
padding-left: 10px;
form{
    display:flex;
    flex:1;
}
form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;

}
form > button {
     display: none
}
input: focus{
    outline: none
}
`
const IconsWrapper = styled.div`
display: flex;
margin: 4px; 
`

