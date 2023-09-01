import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';

const CardFormAction = ({ title, link, icon, text }) => {
  const iconStyle = !text ? { margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'stretch' } : {};
  return (
    <Tooltip title={title || 'Button'} placement="left">
      <Button variant="contained" endIcon={icon} style={iconStyle} component={RouterLink} to={link}>
        {text && text}
      </Button>
    </Tooltip>
  );
};

CardFormAction.propTypes = {
  icon: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default CardFormAction;
