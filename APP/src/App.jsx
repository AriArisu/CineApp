
import{ Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
    <Header/>
    <br/>
    <div className=" flex-row ">
    <Outlet/>
    </div>
    </>
  )
}

export default App
