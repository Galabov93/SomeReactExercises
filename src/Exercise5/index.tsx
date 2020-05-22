import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  backgroundItem: {
    width: "100%",
    height: 200,
    background: (props: myTheme) => props.primary,
  },
  button: {
    background: (props: myTheme) => props.secondary,
    color: (props: myTheme) => props.primary,
  },
});

interface myTheme {
  primary: string;
  secondary: string;
}

const lightThem: myTheme = {
  primary: "black",
  secondary: "white",
};

const darkTheme: myTheme = {
  primary: "white",
  secondary: "black",
};

export default function ChangeTheme() {
  const [theme, setTheme] = useState<myTheme>(lightThem);
  const classes = useStyles(theme);

  const handleChangeTheme = () => {
    if (theme.primary === lightThem.primary) {
      setTheme(darkTheme);
    } else {
      setTheme(lightThem);
    }
  };
  return (
    <div className={classes.backgroundItem}>
      <button
        className={classes.button}
        type="button"
        onClick={handleChangeTheme}
      >
        Change theme
      </button>
    </div>
  );
}
