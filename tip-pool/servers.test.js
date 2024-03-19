describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should handle null inputs for submitServerInfo()', () => {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update the server table on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable();

    let curTd = document.querySelectorAll('#serverTable tbody tr td');
    expect(curTd.length).toEqual(3);
    expect(curTd[0].innerText).toEqual('Alice');
    expect(curTd[1].innerText).toEqual('$0.00');
    expect(curTd[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = ''
  });
});
