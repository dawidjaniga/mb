import React from 'react'
import useEditorMediator from 'pages/editor/mediator'
import { useMessagesById } from 'stores/Messages'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: #888;
  margin: 1em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 40px;
  font-weight: 800;

  ${({ active }) =>
    active &&
    css`
      background-color: lime;
    `}
`

export default function Tile ({ id }: { id: number }) {
  const [state] = useMessagesById({ id })
  const { userClickedObject } = useEditorMediator()

  function handleOnClick () {
    userClickedObject(id)
  }

  return (
    <Wrapper onClick={handleOnClick} active={state.active}>
      {id}
    </Wrapper>
  )
}
