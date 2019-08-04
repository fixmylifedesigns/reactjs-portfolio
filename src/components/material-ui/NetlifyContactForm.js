import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

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

export default function NetlifyContactForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: ""
  });

 const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

 const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <form
      className="flex"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      // action={`https://getsimpleform.com/messages?form_api_token=${
      //   process.env.REACT_APP_FORM_TOKEN
      // }`}
      // method="post"
    >
      <TextField
        id="filled-dense"
        label="Name"
        className={clsx(classes.textField, classes.dense)}
        margin="Name"
        type="text"
        name="fullname"
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
      >
        Send
        {/* <Icon className={classes.rightIcon}>send</Icon> */}
      </Button>
    </form>
  );
}


