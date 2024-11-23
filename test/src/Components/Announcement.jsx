import PropTypes from "prop-types"

const Announcement = ({message}) => {
  return (
    <>
        <div style={{ textAlign: "center", fontSize: "1.5rem", color: "#fff" }}>
            { message }
        </div>
    </>
    );
};

Announcement.propTypes = {
    message: PropTypes.string,
}

export default Announcement;
