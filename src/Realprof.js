import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import SearchBar from "material-ui-search-bar";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Mytress from './mytrees';
import TitlebarImageList from './proffeed';
import PrimarySearchAppBar from './Appbar';
import { Container } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 705,
    height:600,
    marginLeft:530,
    marginTop:100
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  images:{
    width:50,
  },
icon:{
  color:"red"

  }
  
  
}));

export default function Realprofile() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div >
    <PrimarySearchAppBar/>
    <Container fixed>
    <Grid container spacing={3}>
    <Grid item xs={12}>
           <img src="./face.png" style={{width:130,marginLeft:550,marginTop:30,}}/>
    </Grid>
    <Grid item xs={12}>
      <Typography className="content" variant="h5" align="center" >
              John Doe
        </Typography>
        
        </Grid>     
    <Grid item xs={12}>
            <Typography className="content" variant="h5" align="center" style={{marginLeft:35}} >
              Chennnai
              <IconButton aria-label="share" color="primary" className={classes.icon}>
                      <RoomIcon />
                </IconButton>
      </Typography>
      </Grid>    
      <Grid item xs={12}>
      <Divider variant="middle"/>
      </Grid>
      <Grid item xs={12}>
      <Mytress/>
      </Grid>
      </Grid>
      </Container>
     
   
    </div>
  );
}
