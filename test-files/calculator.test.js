import { calculator } from "../code-files/functions";

test('checks if it adds 2,3 to 5',()=>
expect(calculator.add(2,3)).toEqual(5)
);

test('checks if it subtracts 2,3 to -1',()=>
expect(calculator.subtract(2,3)).toEqual(-1)
);

test('checks if it multiplies 2,3 to 6',()=>
expect(calculator.multiply(2,3)).toEqual(6)
);

test('checks if divides 10,2 to 5',()=>
expect(calculator.divide(10,2)).toEqual(5)
);

