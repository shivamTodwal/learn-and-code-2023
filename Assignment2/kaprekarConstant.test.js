const {
    kaprekarRoutine,
    isFourDigit,
    addLeadingZero,
    convertIntoDescending,
    convertIntoAscending,
  } = require('./kaprekarConstant.js'); 
  
  // Test cases for isFourDigit function
  test('isFourDigit should return true for a four-digit number', () => {
    expect(isFourDigit('1234')).toBe(true);
  });
  
  test('isFourDigit should return false for a non-four-digit number', () => {
    expect(isFourDigit('123')).toBe(false);
    expect(isFourDigit('12345')).toBe(false);
  });
  
  // Test cases for addLeadingZero function
  test('addLeadingZero should add a leading zero to a three-digit number', () => {
    expect(addLeadingZero('123')).toBe('0123');
  });
  
  // Test cases for convertIntoDescending function
  test('convertIntoDescending should convert a number into descending order', () => {
    expect(convertIntoDescending('3521')).toBe('5321');
  });
  
  // Test cases for convertIntoAscending function
  test('convertIntoAscending should convert a number into ascending order', () => {
    expect(convertIntoAscending('3521')).toBe('1235');
  });
  
  // Test cases for kaprekarRoutine function
  //test('kaprekarRoutine should reach Kprekar\'s constant after a certain number of iterations', () => {
  //  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  //  kaprekarRoutine('3521');
  //  expect(consoleSpy).toHaveBeenCalledWith(
  //    'Kprekar\'s constant is reached after 5 iterations'
  //  ); 
  //  consoleSpy.mockRestore();
  //});
  
  