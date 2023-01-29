import PropTypes from 'prop-types';
import { Cont, Card, Logo, Icon, Clear, IconClear } from './Container.styled';
import logo from '../../img/logo.svg';
import clear from '../../img/clear.svg';

const Container = ({ children, onClear }) => {
  return (
    <Cont>
      <Logo>
        <Icon src={logo} />
        React
      </Logo>
      <Card>
        {children}
        <Clear onClick={onClear} title="Сlick to clear form">
          <IconClear src={clear} width="25px" />
        </Clear>
      </Card>
    </Cont>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Container;