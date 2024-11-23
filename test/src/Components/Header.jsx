import PropTypes from "prop-types"
import Announcement from './Announcement'

const Header = ({announcementMessage}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "25% 50% 25%",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "10px 0",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "left" }}>Left Section</div>
      <Announcement message={announcementMessage} />
      <div style={{ textAlign: "right" }}>Right Section</div>
    </div>
  )
}

Header.propTypes = {
    announcementMessage: PropTypes.string,
}

export default Header
