import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'

import App from '~/App'

describe('App component', () => {
    test('App should exist', () => {
        const app = render(<App/>)

        expect(app).toBeTruthy()
    })
})
