import React from 'react';
import { Header, Navigation, Layout, Drawer } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom'

import './App.css';

function App() {
  const titleStyles = {textDecoration: "none",color: "white"}; 
  return (
    <div>
      <Layout>
        <Header className="header-color" 
          title={<Link style={titleStyles} to="/">Roman Pryima</Link>} 
          scroll
        >
          <Navigation  className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>                             
            <a href="/resume.pdf" target="_blank">Resume</a>   
          </Navigation>	
        </Header>
        <Drawer title={<Link style={titleStyles} to="/">Roman Pryima</Link>}>
          <Navigation  className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>                           
            <a href="/resume.pdf" target="_blank">Resume</a>   
          </Navigation>
        </Drawer>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
