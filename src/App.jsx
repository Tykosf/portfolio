import React from 'react';
<<<<<<< HEAD
import { Header, Navigation, Layout, Drawer } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import './App.css';
const App = () => {
	const titleStyles = {textDecoration: "none",color: "white"}; 
  return (
		<Layout>
			<Header className="header-color" 
			title={<Link style={titleStyles} to="/">Roman Pryima</Link>} 
			scroll>
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
=======
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
>>>>>>> bdbf8632d6e35eb9669e112c2da24779e530a831
  );
}

export default App;
