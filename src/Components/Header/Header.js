import React from 'react'
import {AppBar, Toolbar, Grid} from '@material-ui/core'
import useStyles from './Style'
import './Styles.css'
import roadto from '../../assests/images/roadtoknowledge.svg'
const Header = () =>{
  const classes = useStyles()
  return(
    <>
   
      <AppBar
        position='relative'
        className={classes.appbar}

      >
        <Toolbar>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Blog</li>
    
          </ul>
        </Toolbar>
      </AppBar>
 

         <div className='web-dev'>
            <Grid container  justify="center" md={12} spacing={2}>
                    <Grid item xs={12}  md={6} >
                    <h2>Web Development <br /> Courses</h2>
                    <p className='learn'>Learn to code with an easy to understand, project <br /> based learning path</p>
                    <button className='courses-btn'>Browse courses</button>
                        
                    </Grid>
                    <Grid md={6}>
                        <Grid container  justify="space-evenly" md={12} spacing={1}>
                
                            <Grid className={classes.gridDesc}  item xs={12} lg={2}   md={12} >
                                <img className='road-to' src={roadto} alt='Road to knowledge' />
                            </Grid> 
                        </Grid>
                </Grid>
            </Grid>

        </div> 
           
    </>
  )
}

export default Header