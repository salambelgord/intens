import React, { Component } from 'react';
import Slider from './Slider';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

const Repair = styled.div`
color:#ffffff;
font-size: 36px;
font-weight: 700;
line-height: 50px;

span {
		display:block;
		font-size: 24px;
		line-height: 30px;
	}
`
const LightText = styled.div`
color:#ffffff;
font-size: 18px;
font-weight: 300;
line-height: 28px;
margin-top: 54px;

`
const CallBtn = styled.button `
	width: 247px;
	height: 67px;
	background-color: #ffa14b;
	border-radius: 30px; 
	color: #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-top: 32px;
	
`
class ThirdPage extends React.Component {
	render(){
		return (
				<Row>
					<Col lg={5}>
						<Repair><h2> Some some also text text </h2></Repair>
					</Col>
					<Col lg={6} lgOffset={1}>
						
					</Col>
				</Row>	
			)
	}
}
export default ThirdPage