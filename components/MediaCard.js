import Link from "next/link"

import { Card, CardActions, CardContent, CardMedia } from "@mui/material"
import { Button } from "@mui/material"
import { Typography } from "@mui/material"

//
const MediaCard = (props) => {
  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 340,
        minHeight: 300,
        maxHeight: 320,
      }}
    >
      {props.data.img && (
        <CardMedia
          component="img"
          alt={props.data.name}
          height="140"
          image={`/img/${props.data.img}`}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.name && props.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={{ pathname: `/${props.data.meta.path}` }}>
          <Button size="small">詳しく見る</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default MediaCard
