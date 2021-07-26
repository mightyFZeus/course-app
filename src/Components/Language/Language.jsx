import React from 'react'
import {Grid, Card} from '@material-ui/core'
import uuid from "react-uuid";
import useStyles from './Style'
import './Styles.css'
import angualr from '../../assests/images/angualr.png'
import css from '../../assests/images/css.png'
import javascript from '../../assests/images/javascript.png'
import react from '../../assests/images/react.png'
import html from '../../assests/images/html.svg'
import java from '../../assests/images/java.svg'
import python from '../../assests/images/python.svg'
import cplus from '../../assests/images/cplus.svg'
import typescript from '../../assests/images/typescript.svg'
import php from '../../assests/images/php.png'

const programmingLanguages = [
    {
        id: uuid(),
        language: "React",
        courses:'14 Courses',
        teachers:'3 Teachers',
        image: react

    },
    {
        id: uuid(),
        language: "JavaScript",
        courses:'37 Courses',
        teachers:'6 Teachers',
        image: javascript

    },

    {
        id: uuid(),
        language: "Typescript",
        courses:'42 Courses',
        teachers:'9 Teachers',
        image: typescript

    },
    {
        id: uuid(),
        language: "Angular",
        courses:'14 Courses',
        teachers:'3 Teachers',
        image: angualr

    },
    {
        id: uuid(),
        language: "CSS",
        courses:'14 Courses',
        teachers:'3 Teachers',
        image:css

    },
    {
        id: uuid(),
        language: "HTML",
        courses:'20 Courses',
        teachers:'5 Teachers',
        image:html

    },
    {
        id: uuid(),
        language: "PHP",
        courses:'15 Courses',
        teachers:'6 Teachers',
        image:php

    },
    {
        id: uuid(),
        language: "JAVA",
        courses:'30 Courses',
        teachers:'7 Teachers',
        image:java

    },
    {
        id: uuid(),
        language: "PYTHON",
        courses:'17 Courses',
        teachers:'10 Teachers',
        image:python

    },
    {
        id: uuid(),
        language: "C++",
        courses:'17 Courses',
        teachers:'11 Teachers',
        image:cplus

    }
]

const Language = () => {
    const classes = useStyles()
    return (
        <div>
             <Grid  container justify="center" spacing={2}>
                 {programmingLanguages.map((lang) =>(
                        <Grid className={classes.card}
                         component={Card} 
                         item key={lang.id}
                          xs={12} sm={12}
                           md={2} lg={4}
                           style={{padding:'15px'}}
                           >
                            <div className='lang-div'>
                                 <img  src={lang.image} />
                                 <h4>{lang.language}</h4>
                                 <p className='teach'>{lang.courses},<span>{lang.teachers}</span></p>
                                
                            </div>
                        
                        
                        </Grid>
                 ))}
            
                
            </Grid>
        </div>
    )
}

export default Language
