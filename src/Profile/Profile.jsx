import React from 'react'
import { Grid, Card, CardContent } from '@material-ui/core'
import uuid from 'react-uuid'
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import udemy from '../assests/images/udemy.png'
import './Styles.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';


const tutors = [

       
        {
            id: uuid(),
            name: 'Brad Traversy',
            youtube: 'https://www.youtube.com/c/traversymedia',
            twitter: 'https://www.twitter.com/traversymedia',
            site:'https://traversymedia.com/',
            language_taught: "Css, React, Html, Node, Boostrap",
            github:'https://www.github.com/bradtraversy'
                
            
        },
        {
            id: uuid(),
            name: 'Dev Ed',
            youtube: 'https://www.youtube.com/c/deved',
            twitter: 'https://www.twitter.com/deved94',
            site:'https://developedbyed.com/',
            language_taught: "Css, react",
            github:'https://www.github.com/developedbyed'
                
            
        },
        {
            id: uuid(),
            name: 'Web Dev Simplified',
            youtube: 'https://www.youtube.com/c/webdevsimplified',
            twitter: 'https://www.twitter.com/webdevsimplified',
            site:'',
            udemy:udemy,
            language_taught: "Css, React, Javascript, Node ",
            github:'https://www.github.com/webdevsimplified'
                
            
        },
        {
            id: uuid(),
            name: 'NetNinja',
            youtube: 'https://www.youtube.com/c/thenetninja',
            twitter: 'https://www.twitter.com/thenetninjauk',
            site:'https://netninja.dev',
           
            language_taught: "Css, React, React-Native",
            github:'https://www.github.com/thenetninja'
                
            
        },
        
        {
            id: uuid(),
            name: 'Free Code Camp',
            youtube: 'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ',
            twitter:'https://www.twitter.com/freecodecamp',
            site:'https://freecodecamp.org',
            language_taught: "Css, react, python, c++, C#, java",
            github:'https://github.com/freecodecamp'
                
            
        },
        
        {
            id: uuid(),
            name: 'JavaSrcipt Mastery',
            youtube:'https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A',
            twitter: 'https://twitter.com/JS_Mastery',
            site:' https://bit.ly/MasterJavaScript',
            language_taught: "Css, React, Node, Html",
            github:'https://github.com/adrianhajdin'
                
            
        },
        {
            id: uuid(),
            name: 'Uzoanya Dominic',
            youtube: 'https://www.youtube.com/channel/UC9baFhLF3bCEPSZgje4k99A',
            language_taught: "Css, react, Html, Node",
            
                
            
        },
        {
            id: uuid(),
            name: 'KadetxX',
            github:'https://github.com/kadetXx/',
            site:'https://kadet.dev/',
            
            
                
            
        }
       


]

const Profile = () => {
    return (
        <>
            <Grid  container justify="center" spacing={2}>
                 {tutors.map((tutor) =>(
                        <Grid 
                        key={tutor.id}
                        
                         item 
                          xs={12} sm={12}
                           md={6} lg={4}
                           style={{padding:'15px'}}
                           >
                           <Card>
                               <CardContent>
                               <div className='profile'>
                                    <div>
                                        <h4>{tutor.name}</h4>
                                        <p>{tutor.language_taught}</p>
                                        <div className='profile-social-img'>
                                            <a rel="noopener noreferrer"  href={tutor.youtube} target='_blank'>
                                                <YouTubeIcon />
                                            </a>
                                            <a rel="noopener noreferrer"  href={tutor.twitter} target='_blank'>
                                                <TwitterIcon />
                                            </a>
                                            <a rel="noopener noreferrer" target='_blank'  href={tutor.site}>
                                             <VisibilityIcon />
                                            </a>
                                            <a rel="noopener noreferrer"  href={tutor.github} target='_blank'>
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='profile-img'>
                                        <AccountCircleIcon style={{fontSize:'120px'}} />
                                    </div>
                                </div>
                                
                               </CardContent>
                           </Card>
                        
                        
                        </Grid>
                 ))}
            
                
            </Grid>
        </>
    )
}

export default Profile
