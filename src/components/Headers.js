import React, { Component } from 'react';
import Link from './Link'
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom';

const List = styled.ul `
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	height: 49px;
`
class Headers extends Component {
	render(){
		return (
				<Row>
					<Col lg={12}>
						<nav>
						<List>
							<RouterLink to='/first'>Вызов мастера</RouterLink>
							<RouterLink to='/second'>Прайс на ремонт</RouterLink>
							<RouterLink to='/third'>Наши преимущества</RouterLink>							
							<Link link="#" text="Схема работы"/>
							<Link link="#" text="Отзывы клиентов"/>							
							<RouterLink to='/'>Примеры работ</RouterLink>
							<Link link="#" text="Контакты"/>
						</List>
						</nav>
					</Col>
				</Row>
			)
	}
}
export default Headers 