import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi();

class EventsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.events({ date: '' });
    this.setState({ events: response });
  }



  render() {
    return <div>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      <ul>
        <h1>List of restaurants</h1>
        {this.state.events.map((event) => <li>1. {event.date} {event.id} {event.group}, {event.location}</li>)}
        {this.state.events.map((event) => <li>2. {event.date} {event.id} {event.group}, {event.location}</li>)}
        {this.state.events.map((event) => <li>3. {event.date} {event.id} {event.group}, {event.location}</li>)}
        {this.state.events.map((event) => <li>4. {event.date} {event.id} {event.group}, {event.location}</li>)}
        {this.state.events.map((event) => <li>5. {event.date} {event.id} {event.group}, {event.location}</li>)}
      </ul>
    </div>
  }
}

export default EventsTable;