import PropTypes  from 'prop-types';

function Card({ children, reverse }) {
  let classes = 'card';
  if (reverse) classes += ' reverse' 
  
  return (  
    <div className={classes}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}
export default Card;