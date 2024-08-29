import "./App.css";
import { PopUser } from "./components/Popups/PopUser/PopUser";
import { Header } from "./components/Header/Header";
import { PopNewCard } from "./components/Popups/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/Popups/PopBrowse/PopBrowse";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />

        <PopBrowse />

        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
