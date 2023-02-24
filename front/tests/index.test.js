import {render, screen, cleanup} from '@testing-library/react'
import AppHeader from "../src/components/AppHeader.jsx"

// const {render, screen, cleanup} = require('@testing-library/react')
// const Index = require("../src/")

// test('first test', () => {
//     expect(true).toBe(true)
// })

test('should render index component', () => {
    render(<AppHeader />)
    const AppHeaderElement = screen.getByTestId("index-0")
    expect(AppHeaderElement).toBeInTheDocument()
    expect(AppHeaderElement).toHaveTextContent("Hello World!")
})