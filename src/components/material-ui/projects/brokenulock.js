import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ulock from "../../../images/projects/ulock.png";

const useStyles = makeStyles({
  card: {
    width: 325
  },
  media: {
    height: 180
  }
});

export default function BrokenULock() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href="https://www.brokenulock.com">
        <CardMedia className={classes.media} image={ulock} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Broken U-Lock
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Indepentdent Project, Web application that alows users to create an
            account and make posts to report stolen bicycles.
            <br />
            Work in progress.
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://www.brokenulock.com">
          Website
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://github.com/brokenulock"
        >
          Repo
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://documenter.getpostman.com/view/7133880/SVfMUAdJ?version=latest"
        >
          API Doc
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://youtu.be/reFElyEkXPg"
        >
          Demo
        </Button>
      </CardActions>
    </Card>
  );
}
