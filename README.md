# Private Context Value within Public Calculator

## Purpose
Show how to use a private scope context within an annoymous function. So we can access
public methods (`add, subtract, total`) but keep the running value (`privateContext`) seperated.

### Interface: CalculatorDesign
```ts
interface CalculatorDesign {
  add(value: number): number;
  subtract(value: number): number;
  total(): number;
}
```

### Class Implementation: Calculator
```ts
const Calculator = () => {

  // Private Scope
  let privateContext = 0;

  // Calculator implementing Design Interface
  return new class Calculator implements CalculatorDesign {
    constructor(private context: number = privateContext) {
      // empty
    }
    total(): number {
      return this.context;
    }
    add(value: number): number {
      this.context += value;
      return this.context;
    }
    subtract(value: number): number {
      this.context -= value;
      return this.context;
    }
  };
};
```

### Execution
```ts
import Calculator from "./calculator";

/**
  * Public Methods: add, substract, total
  */
const calc = Calculator();

calc.add(10);
calc.subtract(10);

// get our total
const total = calc.total(); // 10

```

## Testing

- Run Unit Tests against the Calculator module.
```bash
  calculate
    ✓ should not contain 'context' as part of the prototype scope
    ✓ should contain functions 'add, substract, total' as part of the prototype scope
    ✓ should return zero at first
    ✓ should return 10 after adding 10

  4 passing (25ms)
```
