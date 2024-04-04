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
                  {user[index].name[0]} {/* Primeira letra do nome do usuário */}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={user[index].name}
              subheader={vaga.createdAt.toDateString()}
            />
            <CardMedia
              component="img"
              height="194"
              src="/../../../static/images/cards/temos-vagas.png"
              alt="Temos vagas"
            />
            <CardContent>
              <Typography variant="body1" color="text.primary">
                {vaga.description}
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
              numero:{vaga.description}
            </CardVagaExpandMore>
          </Card>
        ))}
      </Container>
    </div>
  );
}
