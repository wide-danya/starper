import { fieldWillBeChecked, mineWillBeDefused } from 'models/sapper'
import { FieldState } from 'models/sapper/types'
import BombIcon from './svg/BombIcon'

interface Props {
  bomb: boolean
}

export default function Bit({ bomb }: Props) {
  const handleClick = (e: any) => {
    if (e.type === 'click') {
      fieldWillBeChecked()
    } else if (e.type === 'contextmenu') {
      e.preventDefault()
      mineWillBeDefused()
    }
  }

  let className = 'border-[1px] w-[24px] h-[24px] m-2'

  let state: FieldState = FieldState.CLOSED
  let children: React.ReactNode = null

  // todo: detect nearby bombs
  let number = 1

  switch (state as FieldState) {
    case FieldState.CLOSED:
      className += ' bg-purple-500'
      break
    case FieldState.BOMB:
      children = <BombIcon />
      break
    case FieldState.NUMBER:
      children = <div className="text-center">{number}</div>
      break
    case FieldState.FLAG:
      children = <div className="text-center">🚩</div>
      break
  }

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleClick}
      className={className}
    >
      {children}
    </div>
  )
}
