import React, { Component } from "react";
import { connect } from "react-redux";

export class Result extends Component {
  render() {
    const { chairSelectedList, handlePay } = this.props;
    return (
      <div>
        <h3>Kết quả đặt vé</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>Số ghế</td>
                <td>Giá tiền</td>
              </tr>
            </thead>
            <tbody>
              {chairSelectedList.map((item) => {
                return (
                  <tr key={item.soGhe}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-5">
            Tổng tiền:{" "}
            {chairSelectedList
              .reduce((total, item) => {
                return (total += item.gia);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </div>
          <div className="mt-5 btn btn-success" onClick={handlePay}>
            Thanh Toán
          </div>
        </div>
      </div>
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
    handlePay: () => {
      dispatch({
        type: "PAY",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
