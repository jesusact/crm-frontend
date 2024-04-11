import { SideMenu } from './components/SideMenu'
import { SearchInput } from './components/SearchInput'
import { Dasboard } from './components/Dashboard'
import './App.css'

function App() {
  return (
    <div className='grid-container'>

      <div className='grid-item'>
         <SideMenu />
      </div>

      <div className='grid-item'>
         <SearchInput/>
         <Dasboard/>
      </div>

      <div className='grid-item'>
      </div>

    </div>
  )
}

export default App
