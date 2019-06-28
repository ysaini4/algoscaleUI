import React, { Component } from "react";
import { twitter } from "../services/apis";
import TweetTable from "./tweetTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Tweets extends Component {
  state = { search_key: "", search_data: [], start_date: "", end_date: "" };
  searchChange = ({ currentTarget }) => {
    this.setState({ search_key: currentTarget.value });
  };
  handleSearch = async () => {
    try {
      let { search_key, start_date, end_date } = this.state;
      let result = await twitter({
        search_key,
        start_date,
        end_date
      });
      this.setState({ search_data: result.search_data });
    } catch (e) {}
  };
  handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    this.props.history.push("/login");
  };
  startDateChange = date => {
    this.setState({
      start_date: date
    });
  };
  endDateChange = date => {
    this.setState({
      end_date: date
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row m-1">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              value={this.state.search}
              onChange={this.searchChange}
              placeholder="Search"
            />
          </div>
          <div className="col-md-2">
            <DatePicker
              className="form-control"
              selected={this.state.start_date}
              onChange={this.startDateChange}
              placeholderText="Start Date"
            />
          </div>
          <div className="col-md-2">
            <DatePicker
              className="form-control"
              selected={this.state.end_date}
              onChange={this.endDateChange}
              placeholderText="End Date"
            />
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-primary"
              name="Search"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-danger"
              name="Search"
              onClick={this.handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TweetTable data={this.state.search_data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tweets;
