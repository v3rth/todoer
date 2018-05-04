import { connect } from "react-redux";
import Lists from "./Lists";

const mapStateToProps = ({lists, selectedList, edit}) => ({
  lists,
  editableList: edit.type === 'list' ? edit.id : null
});

export default connect(mapStateToProps)(Lists);
