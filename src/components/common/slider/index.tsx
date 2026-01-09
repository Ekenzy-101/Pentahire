import Slider, { Settings } from "@ant-design/react-slick";
import { Container, ContainerProps, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { PropsWithChildren, useRef } from "react";

import { useStyles } from "./styles";

interface Props extends PropsWithChildren {
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
  const { classes, cx } = useStyles();

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
      className={cx(classes.root, rootProps?.className)}
    >
      {rootChildren}
      <IconButton
        onClick={handleSlickPrev}
        className={cx(...btnClassNames, classes.prevBtn)}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={handleSlickNext}
        className={cx(...btnClassNames, classes.nextBtn)}
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
