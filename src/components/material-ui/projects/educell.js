import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import educell from "../../../images/projects/educell.png";

const useStyles = makeStyles({
  card: {
    width: 325
  },
  media: {
    height: 180
  }
});

export default function EducellCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={educell}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Educell
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Solo Project, tasked to create a marketing page for a web
            application
            <br />
            <br />
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://educell-marketing.netlify.com/"
        >
          Website
        </Button>
        <Button size="small" color="primary" href="#/educell">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
