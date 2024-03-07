import GetStarted from "./components/GetStarted";
import Main from "./components/Main.jsx";
import MainBody from "./components/MainBody.jsx";
import MayLike from "./components/MayLike";
import NavBar from "./components/NavBar.jsx";
function App() {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Main />
      <MainBody />
      <MayLike />
      <div className="hidden sm:block md:block">
        <GetStarted />
      </div>
    </div>
  );
}

export default App;
