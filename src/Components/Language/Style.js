import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
    card:{
      
       
        marginBottom: '3em',
        [theme.breakpoints.down('sm')]: {
             marginRight:'1em',
             textAlign:'center',
              
          },
          "&:hover":{
            backgroundColor:'#ffffff',
            border: '1px solid #000'
          }
       
    }
}));
