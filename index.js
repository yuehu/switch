
var classes = require('classes');
var events = require('event');
var emitter = require('emitter');

function Switch(value) {
  var me = this;
  me._value = value || false;

  var labelOn = document.createElement('label');
  labelOn.className = 'switch-on-label';
  me._labelOn = labelOn;

  var labelOff = document.createElement('label');
  labelOff.className = 'switch-off-label';
  me._labelOff = labelOff;

  var element = document.createElement('div');
  element.className = 'switch';
  element._class = classes(element);
  me.element = element;

  element.appendChild(labelOn);
  element.appendChild(labelOff);
  events.bind(element, 'click', function() {
    me.toggle();
  });

  me.label();
  me.change(me._value);
}
emitter(Switch.prototype);

Switch.prototype.label = function(on, off) {
  this._labelOn.innerHTML = on || 'ON';
  this._labelOff.innerHTML = off || 'OFF';
};

Switch.prototype.change = function(value) {
  value = value ? true: false;
  this._value = value;
  if (value) {
    this.element._class.add('on');
    this.element._class.remove('off');
  } else {
    this.element._class.add('off');
    this.element._class.remove('on');
  }
  this.emit('change', value);
};

Switch.prototype.toggle = function() {
  if (this._value) {
    this.change(false);
  } else {
    this.change(true);
  }
};

Switch.prototype.takeover = function(input) {
  // render element to the dom
  input.parentNode.insertBefore(this.element, input);

  // hide original input
  input.style.display = 'none';

  var on = input.getAttribute('data-on-label');
  var off = input.getAttribute('data-off-label');
  this.label(on, off);

  this.on('change', function(value) {
    input.checked = value;
  });
};

module.exports = Switch;
