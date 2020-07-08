import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const [values, setValues] = useState({
    to: "ijd.irving@gmail.com",
    url: window.location.hostname,
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [error, setError] = useState(false);
  console.log(values);
  const handleChange = (e) => {
    setError(false)
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, email, message } = values;
    if (name === "" || email === "" || message === "") {
      setError(true);
    } else {
      axios
        .post(`https://fixmylife-next-api.herokuapp.com/api/mailer/`, values)
        .then((res) => {
          console.log(res);
          alert("thank you");
          setValues({
            to: "ijd.irving@gmail.com",
            url: window.location.hostname,
            name: "",
            email: "",
            message: "",
            phone: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form
      className="flex"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className={`contactAlertMessage ${error ? "" : "hidden"}`}>
        <h5>PLEASE FILL ALL REQUIRED FIELDS</h5>
      </div>

      <TextField
        id="filled-dense"
        label="Name (Required)"
        className={clsx(classes.textField, classes.dense)}
        margin="Name"
        value={values.name}
        type="text"
        name="name"
        variant="filled"
        onChange={handleChange}
      />

      <TextField
        id="filled-dense"
        label="Email (Required)"
        className={clsx(classes.textField, classes.dense)}
        value={values.email}
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
        value={values.phone}
        type="telephone"
        name="phone"
        margin="telephone"
        variant="filled"
        onChange={handleChange}
      />

      <TextField
        id="filled-dense-multiline"
        label="Message (Required)"
        className={clsx(classes.textField, classes.dense)}
        value={values.message}
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
      </Button>
    </form>
  );
}
