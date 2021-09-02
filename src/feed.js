import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import './styles.scss';
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from "@material-ui/core/Button";
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
import { Container } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 3000,
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
  avatar: {
    backgroundColor: red[500],

  },
  paper: {
    height: 140,
    width: 100,
  },
  
}));

function FeedPage() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2)
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    
    <div className="main">
      <PrimarySearchAppBar/>
      <Particles>
     
        <Hero>
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, i) => (
              
                <div className="column">
                  <Card className={classes.root}>
                    <Grid>
                    <Grid  item xs={12} md={12} sm={6}>
                      <div style={{color:"#cddc39"}}>
                  <CardHeader 
                   
                    action={
                      <div style={{marginRight:"-40px"}}>
                      <IconButton aria-label="delete" >
                        < DeleteOutlineIcon />
                        </IconButton>
                        <IconButton aria-label="edit" >
                         <EditSharpIcon />
                       </IconButton>
                     </div>
                    }
                  
                    title={
                    <div style={{marginLeft:"-40px"}} >
                      {card.title}
                      
                      </div>
                  }
                    />
                    </div>

                   </Grid>

                   <Grid item xs={12} md={12} sm={6}>
                    <Image ratio={card.imageRatio} src={card.image}  />
                    </Grid>
                    <Grid item xs={12}>
                    <div className="card-body">{card.description}</div>
                    </Grid>
                    <CardActions >
                    <Container fixed>
                    <Grid container spacing={3}  md={12} sm={6}>
                    <Grid item xs={4}>
                    <IconButton aria-label="add to favorites" >
                    <FavoriteIcon />
                    </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                    <IconButton aria-label="share">
                      <RoomIcon />
                    </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                    <AvatarGroup max={3} spacing = {20}>
                    <Avatar alt="Remy Sharp" src={"https://avatars.dicebear.com/api/avataaars/"+Math.random()+".svg"} />
                    <Avatar alt="Travis Howard" src={"https://avatars.dicebear.com/api/avataaars/"+Math.random()+".svg"}/>
                    <Avatar alt="Cindy Baker" src={"https://avatars.dicebear.com/api/avataaars/"+Math.random()+".svg"} />
                    <Avatar alt="Agnes Walker" src={"https://avatars.dicebear.com/api/avataaars/"+Math.random()+".svg"} />
                    <Avatar alt="Trevor Henderson" src={"https://avatars.dicebear.com/api/avataaars/"+Math.random()+".svg"} />
                  </AvatarGroup>
                  </Grid>
                    </Grid>
                    </Container>
                    </CardActions>
                    </Grid>
                  </Card>
                </div>
              ))}

            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      {/* Springy cards from{' '} */}
      <a target="_blank" href="https://bit.ly/382KSdo">
        {/* divjoy.com */}
      </a>
      <div className="notice">(best viewed at larger screen width)</div>
    </div>
  );
}

const cards = [
  {
    title: 'Tree 1⚡️',

    description:
      'Most of the time, disforestation disrupts the balance of the ecosystem and is the cause of climate change, desertification, soil erosion, fewer crops, flooding, increased greenhouse gases in the atmosphere, and a host of problems for indigenous people for present and future world.',
    image: './image1.png',
    imageRatio: 784 / 1016
  },
  {
    title: 'Tree 2 👩‍🎨',
    description:
      'Most of the time, disforestation disrupts the balance of the ecosystem and is the cause of climate change, desertification, soil erosion, fewer crops, flooding, increased greenhouse gases in the atmosphere, and a host of problems for indigenous people for present and future world.',
      image: './image2.png',
    imageRatio: 839 / 1133
  },
  {
    title: 'Tree 3 🚀',
    description:
    'Most of the time, disforestation disrupts the balance of the ecosystem and is the cause of climate change, desertification, soil erosion, fewer crops, flooding, increased greenhouse gases in the atmosphere, and a host of problems for indigenous people for present and future world.',
      image: './image3.jpg',
    imageRatio: 730 / 1030
  },
  {
    title: 'Tree 4 ⚡️',
    description:
    'Most of the time, disforestation disrupts the balance of the ecosystem and is the cause of climate change, desertification, soil erosion, fewer crops, flooding, increased greenhouse gases in the atmosphere, and a host of problems for indigenous people for present and future world.',
      image: './image4.png',
    imageRatio: 784 / 1016
  },
  {
    title: 'Tree 5 👩‍🎨',
    description:
    'Most of the time, disforestation disrupts the balance of the ecosystem and is the cause of climate change, desertification, soil erosion, fewer crops, flooding, increased greenhouse gases in the atmosphere, and a host of problems for indigenous people for present and future world.',
    image: './image2.png',
    imageRatio: 839 / 1133
  },
  {
    title: 'Tree 6 🚀',
    description:
      'Most of the time, disforestation disrupts the balance of the ecosystem and is the cause of climate change, desertification, soil erosion, fewer crops, flooding, increased greenhouse gases in the atmosphere, and a host of problems for indigenous people for present and future world.',
      image: './image1.png',
    imageRatio: 730 / 1030
  }
];



export default FeedPage
