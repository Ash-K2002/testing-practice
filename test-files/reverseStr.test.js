import { reverseString } from "../code-files/functions";

test('test if reverse reverses to esrever',()=>
expect((reverseString('reverse'))).toEqual('esrever')
);

test('test if h reverses to h',()=>
expect((reverseString('h'))).toEqual('h')
);

test('test if blank reverses to blank',()=>
expect((reverseString(''))).toEqual('')
);

