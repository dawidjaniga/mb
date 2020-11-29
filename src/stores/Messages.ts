import {
  createStore,
  StoreActionApi,
  createHook,
  defaults
} from 'react-sweet-state'
import { produce } from 'immer'

defaults.mutator = (currentState, producer) => produce(currentState, producer)
defaults.devtools = true

type ObjectItem = {
  active: boolean
}

type State = {
  objects: { [key: number]: ObjectItem }
}
export type StoreApi = StoreActionApi<State>
type Actions = typeof actions

const initialState: State = {
  objects: {
    1: {
      active: false
    },
    2: {
      active: false
    },
    3: {
      active: false
    }
  }
}

const actions = {
  toggleActive: (id: number) => ({ getState, setState }: StoreApi) => {
    const object = getState().objects[id]
    // @ts-ignore
    setState(draft => {
      draft.objects[id].active = !object.active
    })
  }
}

const Store = createStore<State, Actions>({
  initialState,
  actions
})

const getMessageById = (state: State, props: { id: number }) =>
  state.objects[props.id]

export const useMessages = createHook(Store, { selector: null })
export const useMessagesById = createHook(Store, {
  selector: getMessageById
})
