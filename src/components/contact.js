import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import me_wbg from './me_wbg.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Anthony Okwananke</h2>
                        <img
                            src={me_wbg}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        +1 (403) 630-6292
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white' }}>
                                        <i className="fa fa-envelope-square" aria-hidden="true" />
                                        anthonyokwananke@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white' }}>
                                        <i className="fa fa-skype" aria-hidden="true"></i>
                                        tony.okwananke
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;