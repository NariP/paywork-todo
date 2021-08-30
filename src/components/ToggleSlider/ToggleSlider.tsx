import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface IToggleButtonProps {
  setTheme: Function;
}
const ToggleSlider: React.FC<IToggleButtonProps> = ({ setTheme }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const onClickHandler = () => {
    setToggle(!toggle);
    setTheme((prev: boolean) => !prev);
  };
  const theme = useTheme();
  return (
    <SwitchLabel htmlFor={TOGGLE_THEME}>
      <StyledInput
        type={CHECK_BOX}
        id={TOGGLE_THEME}
        onChange={onClickHandler}
        checked={toggle}
      />
      <SliderRound toggle={toggle} theme={theme} />
    </SwitchLabel>
  );
};
const SwitchLabel = styled.label({
  position: 'relative',
  display: 'inline-block',
  width: 30,
  height: '1em',
  cursor: 'pointer',
  margin: '0 0.4em',
});

const StyledInput = styled.input({
  opacity: 0,
  width: 0,
  height: 0,
});
const SliderRound = styled.span<{ toggle: boolean }>(({ theme, toggle }) => ({
  borderRadius: 34,
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: toggle ? '#89d99f' : 'tomato',
  boxShadow: `inset 0 3px 5px ${theme.colors.normalAlpha}`,
  transition: ' 0.4s',
  '&:before': {
    borderRadius: '50%',
    position: 'absolute',
    content: '""',
    height: '1em',
    width: '1em',
    background: 'white',
    transform: toggle ? 'none' : 'translateX(100%)',
    boxShadow: `0 3px 5px ${theme.colors.normalAlpha}`,
    border: `1px ${theme.colors.normalAlpha}`,
    transition: `0.4s`,
  },
}));

const [TOGGLE_THEME, CHECK_BOX] = ['toggleTheme', 'checkbox'];
export default ToggleSlider;
