import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { App } from '~/App'

window.getComputedStyle = window.getComputedStyle || function() {}

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    }
}

describe('App component', () => {
    test('App should exist', () => {
        const app = render(<App/>)

        expect(app).toBeTruthy()
    })

    test('App should match snapshot', () => {
        const app = render(<App/>)

        expect(app).toMatchSnapshot()
    })
})
