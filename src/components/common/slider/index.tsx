import Slider, { Settings } from "@ant-design/react-slick";
import clsx from "clsx";
import { Container, ContainerProps, IconButton } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import React, { useRef } from "react";

import { useStyles } from "./styles";

interface Props {
  removeArrowsOnMobile?: boolean;
  rootProps?: Omit<ContainerProps, "children">;
  rootChildren?: React.ReactNode;
  settings: Settings;
}

const EnhancedSlider: React.FC<Props> = ({
  children,
  removeArrowsOnMobile,
  rootProps,
  rootChildren,
  settings,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const classes = useStyles();

  const handleSlickNext = () => {
    sliderRef.current?.slickNext();
  };

  const handleSlickPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const btnClassNames = removeArrowsOnMobile
    ? [classes.btn, classes.displayNone]
    : [classes.btn];

  return (
    <Container
      {...rootProps}
      className={clsx(classes.root, rootProps?.className)}
    >
      {rootChildren}
      <IconButton
        onClick={handleSlickPrev}
        className={clsx(...btnClassNames, classes.prevBtn)}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={handleSlickNext}
        className={clsx(...btnClassNames, classes.nextBtn)}
      >
        <ArrowForward />
      </IconButton>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </Container>
  );
};

export default EnhancedSlider;
