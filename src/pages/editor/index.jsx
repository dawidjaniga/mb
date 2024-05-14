import React from 'react'

import Controls from 'components/Controls'
import Editor from 'components/Editor'
import SocketDataProvider from './EventProviders/socket'

export default function EditorPage () {
  return (
    <div>
      <SocketDataProvider />
      <Controls />
      <Editor />
    </div>
  )
}
