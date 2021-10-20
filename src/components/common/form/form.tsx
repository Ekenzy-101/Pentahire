import {
  Button,
  ButtonProps,
  Container,
  ContainerProps,
  Paper,
  Typography,
  TypographyProps,
} from "@material-ui/core";
import React from "react";

import { useStyles } from "./styles";
import EnhancedLink from "../Link";
import { useScreenSizeDown } from "src/hooks";

interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}
export const Form: React.FC<FormProps> = ({ style, ...props }) => {
  return <form style={{ width: "100%", ...style }} {...props}></form>;
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
      variant="h5"
      {...props}
    />
  );
};

export const FormContainer: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  const classes = useStyles();
  const isSmallerScreenDown = useScreenSizeDown("xs");

  return (
    <Container maxWidth="xs" className={classes.container} {...props}>
      <Paper
        variant="elevation"
        style={{ padding: isSmallerScreenDown ? "1rem" : "1.5rem" }}
        elevation={3}
      >
        {children}
      </Paper>
    </Container>
  );
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
