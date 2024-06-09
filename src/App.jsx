
import './App.css'
import PopExit from './components/pop-exit/pop-exit'
import PopNewCard from './components/popNewCard/PopNewCard'
import PopBrowse from './components/Pop-browe/pop-browse'
import Header from './components/header/header'
import Main from './components/main/main'
function App() {

  return (
    <>
       <div className="wrapper">
		
    <PopExit/>
		<PopNewCard/>
		<PopBrowse/>
		<Header/>
		<Main/>

    

    </div>

	

    <script src="js/script.js"></script>
      
    </>
  )
}

export default App
