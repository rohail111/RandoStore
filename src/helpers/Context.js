import React from 'react'

// Declaring the state object globally.
const initialState = {
  user: null,
  count: 0,
  totalPrice: 0,
  selectedItems: []
}

const ContextWrapper = (component) => ({
  ...initialState,
  setCount: (count) => {
    initialState.count = count;
    component.setState({ context: ContextWrapper(component) })
  },
  setTotalPrice: (totalPrice) => {
    initialState.totalPrice = totalPrice;
    component.setState({ context: ContextWrapper(component) })
  },
  setSelectedItems: (selectedItems) => {
    initialState.selectedItems = selectedItems;
    component.setState({ context: ContextWrapper(component) })
  },
})

export const ContextStore = React.createContext({})

export class ContextProvider extends React.Component {
  state = {
    context: ContextWrapper(this)
  }
  render() {
    return (
      <ContextStore.Provider value={this.state.context}>
        {this.props.children}
      </ContextStore.Provider>
    )
  }
}