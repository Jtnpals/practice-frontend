import 'App.css';
import { Button } from 'antd';

function App() {
  return (
    <div>
      <Button type="primary" onClick={() => console.log("Clicked")}>Click Me</Button>
    </div>
  );
}

export default App;
