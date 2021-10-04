import {
  Button,
  ButtonProps,
  Container,
  ContainerProps,
  Typography,
  TypographyProps,
} from "@material-ui/core";
import React from "react";

import { useStyles } from "./styles";
import EnhancedLink from "../Link";

interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}
export const Form: React.FC<FormProps> = (props) => {
  return <form style={{ width: "100%" }} {...props}></form>;
};

export const FormButton: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      color="primary"
      disableElevation
      fullWidth
      size="large"
      variant="contained"
      type="submit"
      {...props}
    />
  );
};

export const FormLegend: React.FC<TypographyProps<React.ElementType>> = (
  props
) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.legend}
      component="h1"
      variant="h4"
      {...props}
    />
  );
};

export const FormContainer: React.FC<ContainerProps> = (props) => {
  const classes = useStyles();
  return <Container maxWidth="xs" className={classes.container} {...props} />;
};

interface FormLinkProps {
  href: string;
  linkText: string;
  text?: string;
}

export const FormLink: React.FC<FormLinkProps> = ({ href, linkText, text }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.linkWrapper}>
      {text}
      <EnhancedLink href={href}>{linkText}</EnhancedLink>
    </Typography>
  );
};
