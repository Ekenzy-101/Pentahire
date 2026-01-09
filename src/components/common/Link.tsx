import Link from "next/link";
import React from "react";
import { makeStyles } from "tss-react/mui";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

const useStyles = makeStyles()(() => ({
  root: { textDecoration: "none", color: "initial" },
}));

const EnhancedLink: React.FC<Props> = ({ className, ...anchorProps }) => {
  const { classes, cx } = useStyles();
  return <Link className={cx(classes.root, className)} {...anchorProps} />;
};

export default EnhancedLink;
