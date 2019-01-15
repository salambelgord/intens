import React, { Component } from 'react';

import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components'
import Headers from './components/Headers'
import Menu from './components/Menu'
import Main from './components/Main'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';


const url = process.env.PUBLIC_URL + '/img/bg.jpg'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`
const MenuWrapper = styled.div`
  padding-top: 20px;
  height: 89px;
  `
const MainWrapper = styled.main`
  height: 600px
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
  `

class App extends Component {
  render() {
    return (
    	<Router>
          <div className="App">
            <HeaderWrapper>
              <Grid>
                <Headers />
              </Grid>
             </HeaderWrapper> 
            <MenuWrapper>
              <Grid>
                <Menu />
              </Grid>
            </MenuWrapper>
            <MainWrapper>
              <Grid>
                <Route path='/' component={Main} exact/>
                <Route path='/first' component={FirstPage} />
                <Route path='/second' component={SecondPage} />
                <Route path='/third' component={ThirdPage} />
              </Grid>
            </MainWrapper>
          </div>
        </Router>  
    );
  }
}



export default App;
