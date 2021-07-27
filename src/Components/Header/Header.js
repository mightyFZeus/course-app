import React,{useState, useEffect} from 'react'
import {AppBar, List, ListItem, Toolbar, Drawer, IconButton, Grid} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './Style'
import './Styles.css'
import roadto from '../../assests/images/roadtoknowledge.svg'
const Header = () =>{
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => setDrawer(open);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const classes = useStyles()
  return(
    <>
      {isDesktop?<div>
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
      </div>: 
      <div>
        <AppBar className={classes.appbar} >
            <Toolbar>
                <div className={classes.menu}>
                  <IconButton  onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                  width="50%"
                    className={classes.test}
                    anchor={"right"}
                    open={drawer}
                    onClose={toggleDrawer(false)}
                  > 
                    <List>
                      <ListItem>
                        Home
                      </ListItem>
                      <ListItem>
                        Courses
                      </ListItem>
                      <ListItem>
                       Blog
                      </ListItem>
                    </List>

                  </Drawer>

                </div>
            </Toolbar>
          </AppBar>  
      </div>
      }
   
 

         <div className='web-dev'>
            <Grid container  justify="center" md={12} spacing={2}>
                    <Grid item xs={12}  md={6} >
                    <h2>Web Development <br /> Courses</h2>
                    <p className='learn'>Learn to code with an easy to understand, project <br /> based learning path</p>
                    <button className='courses-btn'>Register Now!!</button>
                        
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