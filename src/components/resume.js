import React, { Component } from 'react';
import { Grid, Cell, Icon } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'
import me_wbg from './me_wbg.png';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src={me_wbg}
                                alt="avatar"
                                className="avatar-img"
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Tony</h2>
                        <h4 style={{ color: 'grey' }}>Software Developer</h4>
                        {/* <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>I dey try small.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>2136 146 Ave SE, Calgary, AB T2J 5T2</p>
                        <h5>Phone</h5>
                        <p>+1 (403) 630-6292</p>
                        <h5>Email</h5>
                        <p>anthonyokwananke@gmail.com</p>
                        <h5>Website</h5>
                        <p>tony-softworks.com</p> */}



                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName={"Southern Alberta Institute of Technology (SAIT)"}
                            schoolDescription={"Object Oriented Software Development"}
                        />

                        <Education
                            startYear={2005}
                            endYear={2008}
                            schoolName={"University of Ibadan"}
                            schoolDescription={"Petroleum Engineering"}
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2020}
                            endYear={2020}
                            employerName={"Calefy Inc."}
                            jobDescription={"Software Development"}
                        />

                        {/* <Experience
                            startYear={2018}
                            endYear={2020}
                            employerName={"One Place Like That"}
                            jobDescription={"Hustling"}
                        /> */}

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>

                        <Skills
                            skill="Javascript"
                            progress={90}
                        />
                        <Skills
                            skill="C#"
                            progress={80}
                        />
                        <Skills
                            skill="Java"
                            progress={70}
                        />
                        <Skills
                            skill="Python"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;