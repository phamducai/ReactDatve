import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./chair.css";

export class Chair extends Component {
  render() {
    const { item, chairSelectedList, handleChair } = this.props;
    return (
      <button
        className={clsx("chair", {
          booked: item.daDat,
          booking: chairSelectedList.find((ele) => ele.soGhe === item.soGhe),
        })}
        disabled={item.daDat}
        onClick={() => {
          handleChair(item);
        }}
      >
        {item.soGhe}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChair: (chair) => {
      dispatch({
        type: "CHANGE_CHAIR",
        payload: chair,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chair);
