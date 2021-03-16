import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Alexx Bachicha</h2>
                        <img src="https://lh3.googleusercontent.com/znz9d_kpK4XKpf5K2T-z3ZCUOFKBFkHkvDG66Zn_cwZFdNA6Co1YBJ00M-SYqqxuQTIViws=s97" alt="bitmoji" style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Feel free to reach out to me via phone, email or through Slack
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (916) 666-6666
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                            agbachicha@outlook.com
                                        </ListItemContent>
                                    </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-slack" aria-hidden="true"/>
                                        @Alex Bachicha
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