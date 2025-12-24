import PropTypes from "prop-types";

function Card({ title, description, author }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>By: {author}</small>
    </div>
  );
}

Card.defaultProps = {
  author: "Unknown",
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default Card;
