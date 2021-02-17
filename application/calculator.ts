interface CalculatorDesign {
  add(value: number): number;
  subtract(value: number): number;
  total(): number;
}

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

export default Calculator;
