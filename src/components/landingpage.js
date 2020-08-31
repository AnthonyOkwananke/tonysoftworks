import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import meinpencil from '../media/meinpencil';
//import me from './me.jpg';
import me_wbg from './me_wbg.png';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={6}>
                        {<img
                            src={me_wbg}
                            alt="avatar"
                            className="avatar-img"
                        /* height="1000px"
                        width="200px" */
                        />}

                    </Cell>
                    <Cell col={6}>
                        {/* <img
                            src={me}
                            alt="avatar"
                            className="avatar-img"
                            height="1000px"
                            width="200px"
                        /> */}
                        <div className="banner-text">
                            <h3>Hi, I'm</h3>
                            <h2>Tony</h2>
                            <p>I build websites, web applications, native applications, and embedded softwares</p>

                            {/* <hr />
                            <p>HTML | CSS | Bootstrap | Javascript | React | NodeJs | C# | ASP.NET | Java | Python</p> */}

                            <div className="social-links">

                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/anthony-okwananke" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/*Github*/}
                                <a href="https://github.com/AnthonyOkwananke" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;