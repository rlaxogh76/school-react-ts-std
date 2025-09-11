export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    console.log("onCallDispatchEvent");
    document
      .getElementById("root")
      ?.dispatchEvent(new Event("click", { bubbles: true }));
  };

  const onCallClick = () => {
    console.log("onCallCLick");
    document.getElementById("root")?.click();
  };

  return (
    <div>
      <p>Dispatch Event</p>
      <button onClick={onCallDispatchEvent}>Call dispatchEvent</button>
      <button onClick={onCallClick}>Call click()</button>
    </div>
  );
}
