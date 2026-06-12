import { describe, it, expect } from 'vitest'

describe('smoke test -> test environment', () => {
    it('it should execute a real assertion', () => {
        expect(true).toBe(true)
        expect('test').toBe('test')
    })
})