import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import React, { forwardRef } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

const useStyles = makeStyles(() => ({
  root: { textDecoration: "none", color: "initial" },
}));

const EnhancedLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, className, ...anchorProps }, ref) => {
    const classes = useStyles();
    return (
      <Link href={href}>
        <a
          className={clsx(classes.root, className)}
          ref={ref}
          {...anchorProps}
        />
      </Link>
    );
  }
);

export default EnhancedLink;
