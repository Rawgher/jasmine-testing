
it('should calculate the monthly rate correctly', function () {
  let values = {amount: 50000, years: 10, rate: 5};
  expect(calculateMonthlyPayment(values)).toBe('530.33');
});


it("should return a result with 2 decimal places", function() {
  let values = {amount: 15000, years: 15, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toBe('114.75');
});
