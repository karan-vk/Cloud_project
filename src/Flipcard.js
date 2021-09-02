import ReactCardFlip from 'react-card-flip';
import React, { useState } from "react";
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import RoomIcon from '@material-ui/icons/Room';
import PrimarySearchAppBar from './Appbar.js';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Card , Container} from '@material-ui/core';
import Createpst from './Createpost.js';
import { Link } from 'react-router-dom';


class Flip extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
         <div style={{overflow: "hidden",}}>
             <PrimarySearchAppBar/>
        <Card style={{maxWidth:1000,height:500,marginTop:60,marginLeft:270,background:"#F5F5F5"}}>
        
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" >
          <Container>
              <Grid>
        <Grid item sm={12}>
         <Createpst/>
         </Grid>
         <Grid item xs={12}>
        <Button variant="contained" onClick={this.handleClick} style={{width:140,fontSize:2,background:"#4dd0e1",height:50,marginLeft:390,marginTop:80}}><Typography variant="button" display="block" gutterBottom>
        <h4>Add Details</h4>
      </Typography></Button>
            </Grid>
            </Grid>
          </Container>
  
          <Container>
            <Grid style={{marginTop:20}}>
            <Grid item sm={12}>
            <TextField
          id="standard-full-width"
          label="Tree name"
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
         </Grid>
         <Grid Container spacing={3}>
         <Grid item xs={6} style={{width:400}}>
            <TextField
          id="standard-full-width"
          label="location"
          style={{ margin: 8 }}
          placeholder=""

          margin="normal"
          fullWidth 
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={6} style={{width:450,marginLeft:470,marginTop:-65,}}>
            <TextField
          id="standard-full-width"
          label="Species"
          style={{ margin: 8 }}
          placeholder=""

          margin="normal"
          fullWidth 
          InputLabelProps={{
            shrink: true,
          }}
        />
         </Grid>

         </Grid>
         <Grid item sm={12} style={{marginTop:90}}>
         <TextField
          style={{ margin: 8 }}
          label="Description"
          hintText="Message Field"
          floatingLabelText="MultiLine and FloatingLabel"
          fullWidth
          variant="outlined"
          multiline
          rows={3}
        />
        </Grid>
        
         <Grid item xs={12}>
        <Button variant="contained"  style={{width:140,fontSize:2,background:"#4dd0e1",height:50,marginLeft:390,marginTop:60}}><Typography variant="button" display="block" gutterBottom>
        <Link style={{textDecoration:"none"}} to='/feed'>Create</Link>
      </Typography></Button>
            </Grid>
            
          </Grid>
          </Container>
        </ReactCardFlip>
        </Card>
        </div> 
      )
    }
  }
export default Flip;