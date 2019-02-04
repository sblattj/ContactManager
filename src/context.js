import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Stephen Blatt",
        email: "sblatt@gmail.com",
        phone: "555-454-5555"
      },
      {
        id: 2,
        name: "Karen Blank",
        email: "kblank@gmail.com",
        phone: "555-454-8888"
      },
      {
        id: 3,
        name: "Henry Ford",
        email: "hford@gmail.com",
        phone: "325-555-5455"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
