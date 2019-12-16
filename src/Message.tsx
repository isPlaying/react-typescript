import React from "react";
import { messageHoc } from "./Hoc";

interface UserMessage {
  name: string;
  message: string;
}

const example = (props: UserMessage) => (
  <div>
    {props.name},{props.message}
  </div>
);
export const Message = messageHoc(example);
