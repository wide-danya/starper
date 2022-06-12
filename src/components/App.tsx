import { useStore } from 'effector-react'
import { $mineField } from 'models/sapper'
import Row from './Row'

export default () => {
  const mineField = useStore($mineField)

  return (
    <div className="m-6">
      <h1 className="text-stone-900 text-3xl m-2">Starper</h1>
      {mineField.map((row) => (
        <div className="flex flex-row">
          <Row row={row} />
        </div>
      ))}
    </div>
  )
}
