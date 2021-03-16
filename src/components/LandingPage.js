import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}> 
                        <img src="https://lh3.googleusercontent.com/znz9d_kpK4XKpf5K2T-z3ZCUOFKBFkHkvDG66Zn_cwZFdNA6Co1YBJ00M-SYqqxuQTIViws=s97" alt="bitmoji" className="bitmoji-img"/>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML | CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/alex-bachicha-a10a6015b/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/alexbachicha" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* FreeCodeCamp */}
                                <a href="https://www.instagram.com/cheecchx/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>
                                {/* YouTube */}
                                <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
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