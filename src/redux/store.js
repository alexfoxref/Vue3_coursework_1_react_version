import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer'

const store = createStore(reducer)

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
