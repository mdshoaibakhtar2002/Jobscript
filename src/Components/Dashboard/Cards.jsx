/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareMenuItem from '../Resuable/ShareMenuItem';
import { useState } from 'react';

export default function Cards(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop:"3rem" }}>
      <CardMedia
        sx={{ height: 350, cursor:'pointer' }}
        image={props.image}
        title= {props.title}
        onClick={() => window.open(props.link, '_blank')}
      />
      <div>
        <ShareMenuItem anchorEl = {anchorEl} open={open} handleClose={handleClose}/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#757575">
        {props.title}
        </Typography>
        <Typography variant="body2" color="#757575">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Share</Button>
        <Button size="small" onClick={()=> window.open(props.link, '_blank')}>Learn More</Button>
      </CardActions>
    </Card>
  );
}