import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`${size} is not available`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--font-size": styles.fontSize / 16 + "rem",
          "--border-thickness": styles.borderThickness + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: var(--size);
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  padding-left: var(--height);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
