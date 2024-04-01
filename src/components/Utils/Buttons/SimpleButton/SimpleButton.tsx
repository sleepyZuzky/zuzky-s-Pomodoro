import { ReactElement } from 'react';

interface SimpleButtonType {
  backgroundColor: string,
  color: string,
  fontFamily: string,
  text: ReactElement | string
}

export default function SimpleButton ({backgroundColor, color, fontFamily, text}: SimpleButtonType) {
  return <span style={{backgroundColor, color, fontFamily}}>
    {text}
  </span>
}
