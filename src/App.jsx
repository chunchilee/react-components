import Accordion from "./components/Accordion"
import Counter from "./components/Counter"
import Dropdown from "./components/Dropdown"
import Modal from "./components/Modal"
import Table from "./components/Table"

const App = () => {
  return (
    <div className="container mx-auto flex flex-col columns-1 gap-y-20 pt-10">
      <Accordion />
      <Counter />
      <div className="flex gap-10 justify-around">
        <Dropdown />
        <Modal />
      </div>
      <Table />
    </div>
  )
}

export default App