import { useContext } from "react"
import { CounterContext } from "../context/countex"

export const Component1 = () => {
    const value = useContext(CounterContext)
  return (
    <div>{value.count}</div>
  )
}
