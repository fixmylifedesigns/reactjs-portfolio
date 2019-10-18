import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 325
  },
  media: {
    height: 180
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();

  const apiDoc = () => {
    if (props.api) {
      return (
        <Button size="small" color="primary" href={props.api}>
          API Doc
        </Button>
      );
    } else {
      return "";
    }
  };

  const demo = () => {
    if (props.demo) {
      return (
        <Button size="small" color="primary" href={props.demo}>
          Demo
        </Button>
      );
    } else {
      return "";
    }
  };

const tutorial = () => {
    if (props.tutorial) {
      return (
        <Button size="small" color="primary" href={props.tutorial}>
          Tutorial
        </Button>
      );
    } else {
      return "";
    }
  };

  return (
    <Card className={classes.card}>
      <CardActionArea href={props.url}>
        <CardMedia className={classes.media} image={props.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ minHeight: "80px" }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.url}>
          Website
        </Button>
        <Button size="small" color="primary" href={props.repo}>
          Repo
        </Button>
        {apiDoc()} 
        {demo()}
        {tutorial()}
      </CardActions>
    </Card>
  );
}
