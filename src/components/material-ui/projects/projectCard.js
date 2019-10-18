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
  const project = props.project;
  const apiDoc = () => {
    if (project.api) {
      return (
        <Button size="small" color="primary" href={project.api}>
          API Doc
        </Button>
      );
    } else {
      return "";
    }
  };

  const demo = () => {
    if (project.demo) {
      return (
        <Button size="small" color="primary" href={project.demo}>
          Demo
        </Button>
      );
    } else {
      return "";
    }
  };

  const tutorial = () => {
    if (project.tutorial) {
      return (
        <Button size="small" color="primary" href={project.tutorial}>
          Tutorial
        </Button>
      );
    } else {
      return "";
    }
  };

  return (
    <Card className={classes.card}>
      <CardActionArea href={project.website}>
        <CardMedia className={classes.media} image={project.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ minHeight: "80px" }}
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={project.website}>
          Website
        </Button>
        <Button size="small" color="primary" href={project.repo}>
          Repo
        </Button>
        {apiDoc()}
        {demo()}
        {tutorial()}
        {console.log(project.tutorial)}
      </CardActions>
    </Card>
  );
}
