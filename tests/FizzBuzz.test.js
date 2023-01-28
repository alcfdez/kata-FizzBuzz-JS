import { fizzBuzz } from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
    
    
        //Given
        let number = 3;
        //When
        const result = fizzBuzz(number);
        //Then
        expect(result).toBe('Fizz');
        
    });

    test('should return Buzz if divisible by five', () => {

        //Given
        let number = 5;
        //When
        const result = fizzBuzz(number);
        //Then
        expect(result).toBe('Buzz');
        
    });

    test('should return FizzBuzz if divisible by three and five', () => {

        //Given
        let number = 15;
        //When
        const result = fizzBuzz(number);
        //Then
        expect(result).toBe('FizzBuzz')
    });

});