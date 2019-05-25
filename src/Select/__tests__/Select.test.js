import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForDomChange
} from 'react-testing-library'
import Select from '..'

afterEach(cleanup)

describe('select', () => {
  describe('without search', () => {
    it('renders button if no search prop was passed', () => {
      const { queryByTestId } = render(<Select />)
      expect(queryByTestId('button')).not.toBeNull()
      expect(queryByTestId('input')).toBeNull()
    })

    it('toggles dropdown when button is clicked', () => {
      const { queryByTestId, getByTestId } = render(<Select />)
      const button = getByTestId('button')

      fireEvent.click(button)
      expect(queryByTestId('dropdown')).not.toBeNull()

      fireEvent.click(button)
      expect(queryByTestId('dropdown')).toBeNull()
    })

    const setupWithOptions = () => {
      const changeHandler = jest.fn()
      const utils = render(
        <Select onChange={changeHandler}>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select>
      )
      const button = utils.getByTestId('button')
      fireEvent.click(button)
      const dropdown = utils.getByTestId('dropdown')
      return {
        changeHandler,
        dropdown,
        button,
        ...utils
      }
    }

    it('calls onChange when an option is selected', () => {
      const { changeHandler, getByText } = setupWithOptions()
      fireEvent.click(getByText('1'))
      expect(changeHandler).toHaveBeenCalled()
    })

    it('closes dropdown when an option is selected', () => {
      const { dropdown, getByText } = setupWithOptions()
      fireEvent.click(getByText('1'))
      waitForDomChange(() => expect(dropdown).toBeNull())
    })

    it('updates display text when an option is selected', () => {
      const { button, getByText } = setupWithOptions()
      fireEvent.click(getByText('1'))
      waitForDomChange(() => expect(button.innerText).toEqual('1'))
    })
  })

  describe('with search', () => {
    it('renders input if search prop was passed', () => {
      const { queryByTestId } = render(<Select hasSearch />)
      expect(queryByTestId('button')).toBeNull()
      expect(queryByTestId('input')).not.toBeNull()
    })

    it.todo('filters options based on typed input and filter function')

    it.todo('selects closest matching option when user finishes typing')
  })
})
