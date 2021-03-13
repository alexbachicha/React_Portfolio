import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://lh3.googleusercontent.com/znz9d_kpK4XKpf5K2T-z3ZCUOFKBFkHkvDG66Zn_cwZFdNA6Co1YBJ00M-SYqqxuQTIViws=s97"
                                alt="bitmoji"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Alexx Bachicha</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>This is some text</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1930 Wright St #23, 95825</p>
                        <h5>Phone</h5>
                        <p>(916) 123-1234</p>
                        <h5>Email</h5>
                        <p>agbachicha@outlook.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2014}
                            endYear={2017}
                            schoolName="California State University, Sacramento"
                            schoolDescription="BS Biological Sciences"
                        />

                        <Education 
                            startYear={2020}
                            endYear={2021}
                            schoolName="University of California, Davis"
                            schoolDescription="Full Stack Web Development Bootcamp"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                            startYear={2020}
                            endYear={2021}
                            jobName="Client Services Representative"
                            jobDescription="This is a CSR job description"
                        />

                        <Experience 
                            startYear={2020}
                            endYear={2020}
                            jobName="Veterinary Assistant"
                            jobDescription="This is a Vet Assistant job description"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;