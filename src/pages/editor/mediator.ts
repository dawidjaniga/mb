import { boardChannel } from './EventProviders/socket'
import { useMessages } from 'stores/Messages'

export default function useEditorMediator () {
  const [, { toggleActive }] = useMessages()
  const events = {
    userClickedObject (id: number) {
      toggleActive(id)
      boardChannel.trigger('client-activated-item', {
        id
      })
    },
    mateActivatedItem (id: number) {
      toggleActive(id)
    }
  }

  return events
}
