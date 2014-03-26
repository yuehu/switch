/**
 * Switch
 *
 * A switch UI for checkbox.
 *
 * Copyright (c) 2014 by Hsiaoming Yang.
 */

var classes = require('classes');
var events = require('event');
var emitter = require('emitter');

/**
 * Switch Object
 *
 * @param {Boolean} value
 */
function Switch(value) {
  var me = this;
  me._value = value || false;

  var labelOn = createElement('label', 'switch-on-label');
  me._labelOn = labelOn;

  var labelOff = createElement('label', 'switch-off-label');
  me._labelOff = labelOff;

  var mask = createElement('div', 'switch-mask');
  me._mask = mask;

  var el = createElement('div', 'switch');
  el._class = classes(el);
  me.el = el;

  el.appendChild(labelOn);
  el.appendChild(mask);
  el.appendChild(labelOff);

  events.bind(el, 'click', function() {
    me.toggle();
  });

  me.label('ON', 'OFF');
  me.change(me._value);
}
emitter(Switch.prototype);

Switch.prototype.label = function(on, off) {
  if (on) this._labelOn.innerHTML = on;
  if (off) this._labelOff.innerHTML = off;
};

Switch.prototype.change = function(value) {
  value = value ? true: false;
  this._value = value;
  if (value) {
    this.el._class.add('on');
    this.el._class.remove('off');
  } else {
    this.el._class.add('off');
    this.el._class.remove('on');
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

/**
 * Getter and setter for Switch.
 */
Switch.prototype.value = function(val) {
  if (val === undefined) {
    return this._value;
  } else {
    this.change(value);
  }
};

Switch.prototype.takeover = function(input) {
  if (input.checked) {
    this.change(true);
  }

  // render element to the dom
  input.parentNode.insertBefore(this.el, input);

  // hide original input
  input.style.display = 'none';

  var on = input.getAttribute('data-on-label');
  var off = input.getAttribute('data-off-label');
  this.label(on, off);

  this.on('change', function(value) {
    input.checked = value;
  });
};

function createElement(tagName, className) {
  var node = document.createElement(tagName);
  node.className = className;
  return node;
}

module.exports = Switch;
