import DispatchEvent from "./pages/DispatchEvent";
import DragDrop from "./pages/DragDrop";
import EventBubbling from "./pages/EventBubbling";
import EventListener from "./pages/EventListener";
import FileDrop from "./pages/FileDrop";
import FileInput from "./pages/FileInput";
import OnChange from "./pages/OnChange";
import OnClick from "./pages/OnClick";
import ReactOnClick from "./pages/ReactOnClick";
import StopPropagation from "./pages/StopPropagation";
import VariousInputs from "./pages/VariousInputs";
function App() {
  return (
    <div>
      {/* <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener /> */}
      <DragDrop />
      <EventBubbling />
      <FileDrop />
      <FileInput />
      <OnChange />
      <StopPropagation />
      <VariousInputs />
    </div>
  );
}

export default App;
