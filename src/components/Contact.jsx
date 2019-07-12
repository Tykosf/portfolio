import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Contact extends Component {
    render(){
        return(
            <Grid className="landing-grid">
                <Cell col={12}>
                    <main>   
                        <form className="form">
                            <p><input type="text" name="name" className="feedback-input" placeholder="Name" id="name" /></p>
                            <p><input type="email" name="email" className="feedback-input" placeholder="Email" id="email" /></p>
                            <p><textarea className="feedback-input" name="text" id="comment" placeholder="Message"></textarea></p>
                            <input type="submit" name="" value="Submit" className="button-submit" />
                            <div className="easy">				
                            </div> 
                            <div className="icons">Favicon icon made by 
                                <a href="https://www.freepik.com/" title="Freepik">
                                    Freepik
                                </a>
                                from 
                                <a href="https://www.flaticon.com/" title="Flaticon">
                                    www.flaticon.com
                                </a>
                                 is licensed by 
                              <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">
                                  CC 3.0 BY
                              </a>
                            </div>
                        </form>
                        
                    </main>
                    
                </Cell>
            </Grid>
        )
    }

}

export default Contact