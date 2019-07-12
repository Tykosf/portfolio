import React from 'react';
import './App.css';
import { Header, Navigation, Layout, Content,Drawer } from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: "none",color: "white"}} to="/">Roman Pryima</Link>} scroll>
            <Navigation  className="menu-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>                             
                <a href="/resume.pdf">Resume</a>   
            </Navigation>
            
        </Header>

        <Drawer title={<Link style={{textDecoration: "none",color: "white"}} to="/">Roman Pryima</Link>}>
            <Navigation  className="menu-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>                           
                <a href="/resume.pdf">Resume</a>   
            </Navigation>
        </Drawer>
      
        <Content>
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
