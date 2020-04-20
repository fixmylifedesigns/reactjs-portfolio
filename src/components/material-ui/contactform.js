import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));

export default function ContactForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    to: "ijd.irving@gmail.com",
    url: window.location.hostname,
    name: "",
    email: "",
    message: "",
    phone: ""
  });
console.log(values)
  const handleChange =  e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `https://fixmylife-next-api.herokuapp.com/api/mailer/`,
        values
      )
      .then(res => {
        console.log(res);
        // alert("thank you");
      }).catch(err => {
        console.log(err)
      })
  };

  return (
    <form
      className="flex"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="filled-dense"
        label="Name"
        className={clsx(classes.textField, classes.dense)}
        margin="Name"
        type="text"
        name="name"
        variant="filled"
        onChange={handleChange}
      />

      <TextField
        id="filled-dense"
        label="Email"
        className={clsx(classes.textField, classes.dense)}
        type="email"
        name="email"
        margin="email"
        variant="filled"
        onChange={handleChange}
      />

      <TextField
        id="filled-dense"
        label="Phone Number (optional)"
        className={clsx(classes.textField, classes.dense)}
        type="telephone"
        name="phone"
        margin="telephone"
        variant="filled"
        onChange={handleChange}
      />

      <TextField
        id="filled-dense-multiline"
        label="Message"
        className={clsx(classes.textField, classes.dense)}
        margin="text"
        variant="filled"
        multiline
        rowsMax="4"
        name="message"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="submit"
        style={{ background: "#282c34" }}
      >
        Send
        {/* <Icon className={classes.rightIcon}>send</Icon> */}
      </Button>
    </form>
  );
}
