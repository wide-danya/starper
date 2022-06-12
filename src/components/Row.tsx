import Bit from './Bit'

interface Props {
  row: number[]
}
export default function Row({ row }: Props) {
  return (
    <>
      {row.map((bit) => (
        <Bit bomb={!!bit} />
      ))}
    </>
  )
}
