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
    maxWidth: 325
  },
  media: {
    height: 180
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const project = props.project;

  const ButtonFunction = (name, link) => (
    <Button size="small" color="primary" href={link}>
      {name}
    </Button>
  );

  const demo = something => {
    if (something === "Demo" && project.demo) {
      return ButtonFunction(something, project.demo);
    } else if (something === "Website" && project.website) {
      return ButtonFunction(something, project.website);
    } else if (something === "Repo" && project.repo) {
      return ButtonFunction(something, project.repo);
    } else if (something === "Tutorial" && project.tutorial) {
      return ButtonFunction(something, project.tutorial);
    } else if (something === "Api" && project.api) {
      return ButtonFunction(something, project.api);
    } else {
      return null;
    }
  };

  return (
    <Card className={classes.card}>
      <CardActionArea href={project.website || project.repo}>
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
        {demo("Website")}
        {demo("Repo")}
        {demo("Api")}
        {demo("Demo")}
        {demo("Tutorial")}
      </CardActions>
    </Card>
  );
}
