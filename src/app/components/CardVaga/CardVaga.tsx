import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import prisma from '../../../../prisma/client';
import CardVagaExpandMore from './CardVagaExpandMore';
import { Container } from '@mui/material';

export default async function CardVaga () {
  const vaga = await prisma.vaga.findMany()

  return (
    <>
      <Container maxWidth="sm" className='flex flex-col w-auto h-auto m-8' >
      {vaga.map(vagas =>
      <Card sx={{ maxWidth: 345 }} key={vagas.id}>
        <CardHeader 
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={' sa'}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          src="/../../../static/images/cards/temos-vagas.png"
          alt="Temos vagas"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardVagaExpandMore>
          {vagas.description}
        </CardVagaExpandMore>

      </Card>
         )}
      </Container>
    </>
  );
}
