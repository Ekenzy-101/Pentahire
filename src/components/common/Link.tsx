import Link from "next/link";
import React, { forwardRef } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

const EnhancedLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, ...anchorProps }, ref) => {
    return (
      <Link href={href}>
        <a style={{ textDecoration: "none" }} ref={ref} {...anchorProps} />
      </Link>
    );
  }
);

export default EnhancedLink;
