import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import intelliflight from "../../../images/projects/intelliflight.png";

const useStyles = makeStyles({
  card: {
    width: 325
  },
  media: {
    height: 180
  }
});

export default function IntelliFlightCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href="https://www.intelliflight.app/">
        <CardMedia className={classes.media} image={intelliflight} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Intelliflight
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Team Project, tasked to create a web application that allows pilots
            to create pireps and route plans
            <br />
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://www.intelliflight.app/"
        >
          Website
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://github.com/labs13-intelliflight"
        >
          Repo
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://documenter.getpostman.com/view/7133880/S1TYVGJp?version=latest"
        >
          API Doc
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://youtu.be/7UVnwE1ntwc"
        >
          Demo
        </Button>
      </CardActions>
    </Card>
  );
}
