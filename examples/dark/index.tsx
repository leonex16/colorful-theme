/* Comment very important */
import React from 'react'

interface Props {
  name: string;
  color: string;
}

type OtherProps = {
  name: string;
  color: string;
}

function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}

// Notice here we're using the function expression with the type OtherProps
const OtherHeading: React.FC<OtherProps> = ({ name, color }) =>
  <h1>My Website Heading</h1>