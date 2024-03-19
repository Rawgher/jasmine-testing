describe("Payments test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
  });

  it('should check for empty input on submitPaymentInfo()', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    submitPaymentInfo();
    
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should add a new payment to the payments table on submitPaymentInfo()', function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('50');
    expect(allPayments['payment1'].tipAmt).toEqual('10');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });

  it('should check for empty input on createCurPayment()', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();
    
    expect(curPayment).toEqual(undefined);
  });

  it('should create a new payment on createCurPayment()', function () {
    let curPayment = {billAmt: '50', tipAmt: '10', tipPercent: 20};

    expect(createCurPayment()).toEqual(curPayment);
  });  

  it('should update the payment table on appendPaymentTable()', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let tdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(tdList.length).toEqual(4);
    expect(tdList[0].innerText).toEqual('$50');
    expect(tdList[1].innerText).toEqual('$10');
    expect(tdList[2].innerText).toEqual('20%');
    expect(tdList[3].innerText).toEqual('X');
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
