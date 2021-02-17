import Calculator from './calculator';
import { expect } from 'chai';

describe('calculate', function() {

  let calc = Calculator()

  it('should return zero', function() {
    let total = calc.total();
    expect(total).equal(0);
  });

  it('should return 10', function() {
    calc.add(10);
    let total = calc.total();
    expect(total).equal(10);
  });

  it('should not contain \'context\' as part of the prototype scope', function(){
    function getAllMethodNames(obj: any) {
      let methods = new Set();
      while (obj = Reflect.getPrototypeOf(obj)) {
        let keys = Reflect.ownKeys(obj)
        keys.forEach((k) => methods.add(k));
      }
      return methods;
    }
    let properties = getAllMethodNames(Calculator());
    expect(properties.has("context")).equal(false);
  })

});
