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
import { Container, colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';



export default async function CardVaga() {
  const vagas = await prisma.vaga.findMany()
  const user = await prisma.user.findMany()



  
  return (
    <div className='flex justify-center'>
      <Container  className='flex flex-col w-auto h-auto m-8 justify-center' >
        {vagas.map((vaga, index) => (
          <Card sx={{ maxWidth: 345 }} className='mb-4' key={vaga.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                </Avatar>
              }
              action={
                <IconButton aria-label="settings" >
                  <MoreVertIcon />
                </IconButton>
              }
              subheader={vaga.createdAt.toLocaleDateString()}
            />
            <CardMedia
              component="img"
              height="194"
              src="/../../../static/images/cards/temos-vagas.png"
              alt="Temos vagas"
            />
            <CardContent>
             
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" sx={{ color: red[500] }}>
                <FavoriteIcon  />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardVagaExpandMore >
              informações: {vaga.description}
            </CardVagaExpandMore>
          </Card>
        ))}
      </Container>
    </div>
  );
}

