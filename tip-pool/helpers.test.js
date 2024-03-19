describe("Helpers test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it('should generate total sum of bills on all payments for sumPaymentTotal()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(50);

    billAmtInput.value = 250;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });

  it('should generate total sum of tips on all payments for sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(10);

    billAmtInput.value = 250;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(40);
  });

  it('should generate total tip percentage of bills on all payments for sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 250;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(32);
  });

  it('should sum tip percentage of one tip for calculateTipPercent()', function () {
    expect(calculateTipPercent(50, 10)).toEqual(20);
    expect(calculateTipPercent(250, 30)).toEqual(12);
  });

  it ('should update the table on the page using appendTD()', function () {
    let tr = document.createElement('tr');

    appendTd(tr, 'ServerTest');

    expect(tr.children.length).toEqual(1);
    expect(tr.firstChild.innerHTML).toEqual('ServerTest');
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});
