import { useMemo } from 'react'
import './App.css'
import { ServicesProvider } from './services/ServicesProvider'
import { Services } from './services/Services'
import { Main } from './components/Main';

function App() {
  const services = useMemo(() => new Services(), []);

  return (
    <div className='app'>
      <ServicesProvider services={services}>
        <Main />
      </ServicesProvider>
    </div>
  )
}

export default App
