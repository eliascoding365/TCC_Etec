'use client'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface ExpandProps {
  children: React.ReactNode
}



const ExpandMore = styled((props: ExpandMoreProps) => {
const { expand, ...other } = props;
return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
  duration: theme.transitions.duration.shortest,
}),
}));
const CardVagaExpandMore = ({children}: ExpandProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
  setExpanded(!expanded);
};
return (
  <>
    <CardActions disableSpacing>

      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Description:</Typography>
        <Typography paragraph>
          {children}
        </Typography>
      </CardContent>
    </Collapse>
  </>
)}

export default CardVagaExpandMore