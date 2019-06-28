import React, { Component } from "react";
class TweetTable extends Component {
  getLocalTime(UTCtime) {
    return new Date(UTCtime).toLocaleString("en-US", {
      timeZone: "Asia/Kolkata"
    });
  }
  render() {
    let { data } = this.props;
    if (!data || !data.length) return <h4 className="m-2">Data not found</h4>;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tweets</th>
            <th scope="col">User</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            let key = data.indexOf(item) + 1;
            return (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{item.text}</td>
                <td>{item.user.screen_name}</td>
                <td>{this.getLocalTime(item.created_at)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TweetTable;
