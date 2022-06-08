import Partent from "./parrnt";
import Hook from "./component/hooks/hook";
import HookXuan from "./component/hooks/xuanran";
import Xuan from "./component/class/xuran";
function App() {
  return (
    <div className="App">
      <Partent></Partent>
      <hr/>
      <Hook></Hook>
      <hr/>
      <Xuan></Xuan>
      <hr/>
      <HookXuan></HookXuan>
    </div>
  );
}

export default App;
