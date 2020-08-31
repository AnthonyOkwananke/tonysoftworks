import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me_wbg from './me_wbg.png';

class About extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="about-grid">
                    <Cell className="image-cell" col={5}>
                        {<img
                            src={me_wbg}
                            alt="avatar"
                            className="avatar-img"
                        />}
                    </Cell>
                    <Cell col={7}>
                        <div className="about-content">
                            <h1 className="about-title">
                                A little about myself
                            </h1>
                            <br />
                            <p>
                                I'm Tony, a software developer.
                                <br />
                                I trained in enginnering
                                from where I was exposed to the use of softwares for computations.
                                <br />
                                I became fascinated and developed the interest to learn how to write
                                programs to automate processes.
                            </p>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;