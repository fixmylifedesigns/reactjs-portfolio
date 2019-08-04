import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import resume from '../../files/IrvingDuranResume.pdf'
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function ResumeDownload() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" size="small" className={classes.button} href={resume}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Download
      </Button>
    </div>
  );
}