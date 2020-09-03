import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {

  const {colors, title} = useContext(ThemeContext);

  return (
    <Container>
      Wello Word

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={30}
        handleDiameter={20}
        offColor={shade(0.2, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
