import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
    card:{
       
        marginBottom: '3em',
        [theme.breakpoints.up('md')]: {
             marginRight:'1em',
          },
          "&:hover":{
            backgroundColor:'#ffffff',
            border: '1px solid #000'
          }
       
    }
}));
