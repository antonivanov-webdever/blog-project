import { classNames } from './classNames';

describe('classNames', () => {
    test('with one class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const expectValue = 'someClass class1 class2';
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        )).toBe(expectValue);
    });

    test('with mods', () => {
        const expectValue = 'someClass hovered selected';
        expect(classNames(
            'someClass',
            { hovered: true, selected: true },
            [],
        )).toBe(expectValue);
    });

    test('with mods false', () => {
        const expectValue = 'someClass hovered selected';
        expect(classNames(
            'someClass',
            { hovered: true, selected: true, focused: false },
            [],
        )).toBe(expectValue);
    });

    test('with mods undefined', () => {
        const expectValue = 'someClass hovered selected';
        expect(classNames(
            'someClass',
            { hovered: true, selected: true, focused: undefined },
            [],
        )).toBe(expectValue);
    });
});
