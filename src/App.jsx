import "./App.css";
import PopExit from "./components/Popups/PopUser/PopUser";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
    return (
        <>
            <div className='wrapper'>
                <PopExit />
                <PopNewCard />
                <PopBrowse />
                <Header />
                <Main />
            </div>
            <script src='js/script.js'></script>
        </>
    );
}

export default App;
