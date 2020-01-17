import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";

const contactArray = [
];

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        contacts: contactArray
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    removeItem(e){

      var contacts = [...this.state.contacts];
      contacts.slice(index, 1);
      this.setState({contacts})


    }

    handleSubmit(e) {
      e.preventDefault();
      const
      { contacts } = this.state,
      name = this.refs.name.value,

      this.setState({
        contacts: [...contacts, {
          name,
        }]
      }, () => {
        this.refs.name.value = '';
      });
    }
    public render() {
        const { contacts } = this.state;
        return (
            <div className="app">
                <h1>List</h1>
                <form className="form-inline" ref="nameForm" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label >
                      Name
                      <input type="text" id="name" className="form-control" placeholder="stefan" ref="name" />
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Add Name</button>
                </form>
                <h2>Existing user:</h2>
                <ul>
                  {contacts.map((contact, i) =>
                   <li key={i}>{`Name: ${contact.name}`} &nbsp;<button type="button" onClick={this.removeItem}>Remove Name</button></li>
                  )}
                </ul>
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(App);
