import React, {Component} from 'react';
import { Grid, Cell } from "react-mdl";

class Landingpage extends Component {
    render(){
        const styles = {
            width: "100%",
            margin: "auto"
        }
       

        return(
            <div style={styles}>
               <Grid className = "landing-grid">
                <Cell col={12}>
                    <img 
                        src="https://pickaface.net/gallery/avatar/ribarvlada553946d5b6534.png"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>HTML/CSS | JavaScript | React | C# | MySQL | NodeJS</p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://linkedin.com/in/roman-pryima-105091155" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="https://github.com/Tykosf?tab=repositories" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            {/* Gmail */}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope-square" aria-hidden="true" />
                            </a>
                         
                        </div>
                        
                    </div>
                 
                </Cell>
                    
               </Grid>
            
            </div>
        );
    }
}

export default Landingpage