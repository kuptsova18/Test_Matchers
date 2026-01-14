import { SortHealth } from '../basic';

test('sort health heroes', () => {
    const input = [{name: 'мечник', health: 10}, {name: 'маг', health: 100}, {name: 'лучник', health: 80}];
    const expected = [{name: 'маг', health: 100}, {name: 'лучник', health: 80}, {name: 'мечник', health: 10}];
    const result = SortHealth(input);
    expect(result).toEqual(expected);
});
