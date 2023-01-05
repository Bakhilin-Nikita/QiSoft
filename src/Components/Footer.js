import React, {Component} from 'react';
import {Container} from "react-bootstrap";

const Footer =()=> (
    <Container fuild style={{backgroundColor: '#212529',color:'#fff'}}>
        <Container style={{display:'flex', justifyContent:'center',padding:'10px'}}>
            <p>QISoft</p>
        </Container>
    </Container>
)

export default Footer;