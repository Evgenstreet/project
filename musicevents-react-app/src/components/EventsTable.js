import React from 'react';
import * as Api from 'typescript-fetch-api'
import moment from 'moment'
import { withRouter } from "react-router";
const api = new Api.DefaultApi();

class EventsTable extends React.Component {

  constructor(props) {
    super(props);

    const id = this.props.match?.params.id || moment().format('YYYY-MM-DD');
    console.log(id);
    const ul = Array.from(document.querySelectorAll("body #root div nav ul li a"));

    ul.forEach((e) => {
      e.addEventListener("click", (event) => {
        setTimeout(() => {
          this.handleReload();
        }, 250);
      })
    });

    // console.log(e.target);
    // this.handleReload

    this.state = {
      events: [],
      date: id
    };

    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
    // window.onpopstate = this.handleReload();
    // setInterval(() => {
    //   this.handleReload();
    // }, 3000);
  }


  async handleReload(event) {
    const id = this.props.match?.params.id || moment().format('YYYY-MM-DD');
    // console.log(id);
    const response = await api.events({ date: id });
    this.setState({ events: response });
  }



  render() {
    return <div>
      {/* <button className="btn" onClick={this.handleReload}>Reload</button> */}
      <ul>
        {this.state.events.map((event) => <li>Today at the {event.date} {event.id} {event.group}, {event.location}</li>)}
      </ul>
    </div>
  }
}

export default withRouter(EventsTable);