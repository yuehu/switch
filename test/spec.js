
describe('Switch', function() {
  var Switch = require('switch');

  function assert(a, b) {
    if (a !== b) {
      throw new Error(a + ' not equal ' + b);
    }
  }

  it('should has right label', function() {
    var sw = new Switch();
    assert(sw._labelOn.innerHTML, 'ON');
    assert(sw._labelOff.innerHTML, 'OFF');

    sw.label('開', '關');
    assert(sw._labelOn.innerHTML, '開');
    assert(sw._labelOff.innerHTML, '關');
  });

  it('can toggle', function() {
    var sw = new Switch();
    assert(sw._value, false);
    sw.toggle();
    assert(sw._value, true);
    sw.toggle();
    assert(sw._value, false);
  });

  it('can takeover', function() {
    var sw = new Switch();
    var input = document.getElementById('demo');
    assert(sw._value, false);
    sw.takeover(input);
    assert(sw._value, true);
    assert(sw._labelOn.innerHTML, 'Open');
  });
});
