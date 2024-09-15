import { useState } from 'react'
import Button from './Button'

function App() {
  const [theme, setTheme] = useState('red')
  
  return (
    <div className="container" style={{backgroundColor: theme}}>
      <div className="color-bar">
        <Button color="Red" action={setTheme} />
        <Button color="Green" action={setTheme} />
        <Button color="Blue" action={setTheme} />
        <Button color="Yellow" action={setTheme} />
        <Button color="Purple" action={setTheme} />
        <Button color="Orange" action={setTheme} />
        <Button color="Black" action={setTheme} />
        <Button color="White" action={setTheme} />
        <Button color="Pink" action={setTheme} />
        <Button color="Gray" action={setTheme} />
      </div>
    </div>
  )
}

export default App
