import Style from "./pages/Style";
import UsingIcon from "./pages/UsingIcon";
import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";
import "./App.css";
import { Icon } from "./pages/Icon";
import Bootstrap from "./pages/Bootstrap";

export default function App() {
  return (
    <div>
      <button className="btn btn-primary">Bootstrap Button</button>
      <UsingIconWithCSSClass />
      <UsingIcon />
      <Style />
      <Icon name={""} />
      <Bootstrap />
    </div>
  );
}
