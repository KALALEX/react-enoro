import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HotelIcon from '@material-ui/icons/Hotel';
import TubIcon from '@material-ui/icons/HotTub';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


class InfoCardModule extends Component {
  state = {
    expanded : false,
  }

  handleExpandClick = (e) => {
    this.setState({ expanded: !this.state.expanded});
  };

  render(){
    return <Card 
      style={{maxWidth: 300}}
    >
      <CardHeader
        title={"Δωμάτιο "+this.props.data}
        subheader=""
      />
      <CardActionArea onClick={this.handleExpandClick}>
        <CardMedia
          style={{height: 0,
          paddingTop: '56.25%'}}
          image="https://www.enoro.gr/images/room3/enoro-room3-4.jpg"
        />
      
      <CardContent>
        <Typography>
          Reprehenderit mollit cupidatat elit deserunt est enim sunt ea duis. Ut minim dolor eiusmod anim sint ullamco enim eiusmod sunt occaecat amet dolor consequat. Incididunt elit et nostrud ex enim ullamco. Eiusmod duis ex excepteur anim duis eu ex.
        </Typography>
      </CardContent>
      </CardActionArea>

      <Collapse in={this.state.expanded} timeout={{enter: 500, exit: 500}} unmountOnExit>
        <CardContent>
          <List>
          <ListItem>
            <Avatar>
              <HotelIcon />
            </Avatar>
            <ListItemText primary="Υπνοδωμάτιο" secondary="1 διπλό κρεβάτι" />
          </ListItem>
          <ListItem>
            <Avatar>
              <TubIcon />
            </Avatar>
            <ListItemText primary="Τουαλέτα" secondary="Τύπου καμπίνα" />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
        </CardContent>
      </Collapse>
    </Card>
  }
}
export default InfoCardModule;


// <Card className={classes.card}>
//   <CardHeader
//     avatar={
//       <Avatar aria-label="Recipe" className={classes.avatar}>
//         R
//       </Avatar>
//     }
//     action={
//       <IconButton>
//         <MoreVertIcon />
//       </IconButton>
//     }
//     title="Shrimp and Chorizo Paella"
//     subheader="September 14, 2016"
//   />
//   <CardMedia
//     className={classes.media}
//     image="/static/images/cards/paella.jpg"
//     title="Paella dish"
//   />
//   <CardContent>
//   </CardContent>
// </Card>