import { Acordeao } from "./components/Acordeao"
import { Avatar } from "./components/Avatar"
import { Rodape } from "./components/Rodape"
import { ThemeController } from "./components/TheameContoller"
import { Home } from "./pages/home/Index"
import './styleapp.css'
function App() {

  return (
    <>

      {/* <section className="flex justify-center items-center  gap-4 flex-col mt-4" >
        <Avatar />
        <div className="text-2xl"> @sandra_siano </div>
        <ThemeController />
        <h1 className="text-4xl" > Analista</h1>
      </section> */}
      <div className="bg-base-100 shadow-xl p-10 backgrounColorido">
      <Home/>
      <Acordeao/>
      <Rodape/>
      </div>
    </>
  )
}

export default App
