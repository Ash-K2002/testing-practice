import { capitalize } from "../code-files/functions";

test('tests if hello capitalizes to Hello',()=>
expect(capitalize('hello')).toEqual('Hello')
);

test('tests if it capitalizes single letter',()=>
expect(capitalize('h')).toEqual('H')
);

test('tests if blank remains blank',()=>
expect(capitalize('')).toEqual('')
);

