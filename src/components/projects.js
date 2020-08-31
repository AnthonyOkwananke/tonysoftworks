import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import iconfinder_Reactjs_logo_1174949 from './iconfinder_Reactjs_logo_1174949.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }


    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdTX9DvD2iIkQGwWTSIqOzxMv8tKXUW8fauSKMM1bgqQ&usqp=CAU&ec=45690269' }}></CardTitle>
                        <CardText>
                            Work In Progress
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdTX9DvD2iIkQGwWTSIqOzxMv8tKXUW8fauSKMM1bgqQ&usqp=CAU&ec=45690269' }}></CardTitle>
                        <CardText>
                            Work In Progress
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdTX9DvD2iIkQGwWTSIqOzxMv8tKXUW8fauSKMM1bgqQ&usqp=CAU&ec=45690269' }}></CardTitle>
                        <CardText>
                            Work In Progress
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is C#</h1>
                    <h4>Under Construction</h4>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is Java</h1>
                    <h4>Under Construction</h4>
                </div>
            )
        } else return (
            <div>
                <h1>This is Python</h1>
                <h4>Under Construction</h4>
            </div>
        )
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>C#</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Projects;