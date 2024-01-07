import './App.css'

import Button from './button'
import Card from './card';

function App() {
  const handleButtonClick = () => {
    alert('i was clicked');
  }

  return (
    <>
      <h1>React library and reuseable componet</h1>
      <Button color="#ff234e" onClick={handleButtonClick}>
        click and see
      </Button><br />

      <Card title="card header">
        <p>card reuseable component</p>
      </Card>
    </>
  )
}

export default App
