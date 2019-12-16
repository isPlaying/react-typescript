import React, { Component } from "react";
const initialState = {
  name: "Manny",
  message: "HOCs is cool!!"
};

type State = Readonly<typeof initialState>;
export const messageHoc = (WrappedComponent: any) => {
  class Hoc extends Component<{}, State> {
    readonly state: State = initialState;
    render() {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      );
    }
  }
  return Hoc;
};
