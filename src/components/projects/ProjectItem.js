import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  content: {
    backgroundColor: 'transparent',
    position: 'absolute',
    color: '#fff',
    bottom: 0,
    textAlign: 'center'
  }
})

const ProjectItem = ({ uid, title, img, setCurrent }) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.root}
      uid={uid}
      onClick={() => {setCurrent(uid)}}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectItem
