import type { SyntheticEvent } from "react";

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e;

    const onButtonClick = (e: SyntheticEvent) => {
      const { isTrusted, target, bubbles, currentTarget } = e;
      console.log(
        "click event on <button>",
        isTrusted,
        target,
        bubbles,
        currentTarget
      );
    };

    return (
      <div onClick={onDivClick}>
        <p>Event Bubbling</p>
        <button onClick={onButtonClick}>Click me</button>
      </div>
    );
  };
}
