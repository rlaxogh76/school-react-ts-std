import Boostrap from "./pages/Boostrap";
import Icon from "./pages/Icon";
import Style from "./pages/Style";
import UsingIcon from "./pages/UsingIcon";
import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";

export default function App() {
  return (
    <div>
      <button className="btn btn-primary">Bootstrap Button</button>
      <UsingIconWithCSSClass />
      <UsingIcon />
      <Style />
      <Icon />
      <Boostrap />
    </div>
  );
}
