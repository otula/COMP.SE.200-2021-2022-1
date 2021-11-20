import filter from '../filter';


describe('Filter', () => {
  it('handles empty arrays as an input', () => {
    const filteredArray = filter([], (u) => u.active);

    expect(filteredArray).toStrictEqual([[]]);
  });

  it('handles input in which not every user has filtered property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred',   active: false },
      { user: 'Ken' },
    ];

    const filteredArray = filter(users, (u) => u.active);

    expect(filteredArray).toStrictEqual([{ user: 'barney', active: true }])
  });

  it('handles filter function that filters with nonexistant property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred',   active: false },
    ];

    const filteredArray = filter(users, (u) => u.isSecretAgent);

    expect(filteredArray).toStrictEqual([[]])
  });

  it('does not crash when called without required properties', () => {
    const filteredArray = filter();

    expect(filteredArray).toStrictEqual([[]])
  });

  it('is able to filter numbers', () => {
    const filteredArray = filter([0, 1, 2, 3, 4, 5, 6, 7], (u) => u < 5);

    expect(filteredArray).toStrictEqual([0, 1, 2, 3, 4])
  })
});
