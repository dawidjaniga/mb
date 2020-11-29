import Pusher from 'pusher-js'
import useEditorMediator from 'pages/editor/mediator'
import { useEffect } from 'react'

Pusher.logToConsole = true

const pusher = new Pusher('2d4485ab011f9c2d525b', {
  cluster: 'eu',
  authEndpoint: 'http://localhost:5000/pusher/auth'
})

export const boardChannel = pusher.subscribe('private-board')

export default function SocketDataProvider () {
  const { mateActivatedItem } = useEditorMediator()

  useEffect(() => {
    boardChannel.bind('client-activated-item', function ({
      id
    }: {
      id: number
    }) {
      console.log('client-activated-item', id)
      mateActivatedItem(id)
    })
  }, [])

  return null
}
