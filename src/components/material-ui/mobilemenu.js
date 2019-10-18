import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";


const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function MobileMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const linkStyle = {
    textDecoration: "none",
    color: "#282c34",
    fontWeight: "bold",
    textAlign: "center",
    margin: "auto"
  };

  return (
    <div className={props.classname}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        // color="primary"
        onClick={handleClick}
        // style={{ background: "white", color: "#282c34" }}
      >
        Menu <MoreVertIcon style={{ color: "#282c34" }} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
         
            <Link to="/resume" style={linkStyle}>Resume</Link>
      
        </StyledMenuItem>
        <StyledMenuItem>
       
           <Link to="/projects" style={linkStyle}>Projects</Link>
         
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="https://www.linkedin.com/in/irvingduran/" style={linkStyle}>
            LinkedIn
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="https://github.com/fixmylifedesigns" style={linkStyle}>
            GitHub
          </a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="https://www.fmlcycling.com/" style={linkStyle}>
            Fixmylife Co.
          </a>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
