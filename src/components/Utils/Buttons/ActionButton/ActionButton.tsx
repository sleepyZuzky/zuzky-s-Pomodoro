import { ReactElement } from 'react';

interface ButtonType {
  callback: () => void,
  backgroundColor: string,
  cursor: string,
  text: ReactElement | string
}

export default function ActionButton({callback, backgroundColor, cursor, text}: ButtonType) {
  return <button style={{backgroundColor, cursor}} onClick={() => callback()}>
    {text}
  </button>
}
