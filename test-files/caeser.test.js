import { caeserCipher } from "../code-files/functions";

test('Tests if cipher text of blah is cmbi with key 1',()=>
expect(caeserCipher('blah',1)).toBe('cmbi')
);

test('Tests if cipher text of "" is "" with key 1',()=>
expect(caeserCipher('',1)).toBe("")
);

test('Tests if cipher text of "xyz" is "cde" with key 5',()=>
expect(caeserCipher('xyz',5)).toBe('cde')
);

test('Tests if cipher text of "xYz" is "cDe" with key 5',()=>
expect(caeserCipher('xYz',5)).toBe('cDe')
);


test('Tests if cipher text of "xYz09" is "cDe09" with key 5',()=>
expect(caeserCipher('xYz',5)).toBe('cDe')
);



