import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import artfolio from "../../../images/projects/artfolio.png";

const useStyles = makeStyles({
  card: {
    width: 325
  },
  media: {
    height: 180
  }
});

export default function ArtfolioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={artfolio}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Artfolio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Solo Project, tasked to create a web application that allows free
            users to view post and logged in users to publish and share their
            work
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://art-folio.netlify.com/"
        >
          Website
        </Button>
        <Button size="small" color="primary" href="#/artfolio">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
