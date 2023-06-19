import Random from "./components/Random"
import Tag from "./components/Tag"
export default function App() {
  return (
  <div className="w-full flex flex-col background relative items-center">
    <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] font-bold text-3xl px-10 py-2">Random GIFS</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[40px]">
      <Random></Random>
      <Tag></Tag>
    </div>
  </div>
  )
}
