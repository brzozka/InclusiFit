jest.mock('@/services/firebaseService.js', () => ({
  fetchGyms: jest.fn().mockResolvedValue([{ id: 1, name: 'Gym 1' }])
}))

describe('firebaseService', () => {
  it('fetches gyms correctly', async () => {
    const { fetchGyms } = require('@/services/firebaseService')
    const gyms = await fetchGyms()
    expect(gyms).toHaveLength(1)
    expect(gyms[0].name).toBe('Gym 1')
  })
})
