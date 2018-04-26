import { connect } from "react-redux";
import Lists from "./Lists";

const mapStateToProps = ({lists, selectedList}) => ({
  lists,
  selectedList
});

export default connect(mapStateToProps)(Lists);
