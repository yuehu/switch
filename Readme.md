# switch

A switch UI for checkbox.

![switch](https://f.cloud.github.com/assets/290496/1894252/5129c218-7adc-11e3-9ff2-8dfa65a7ebbc.png)


## Installation

Install with [component(1)](http://component.io):

    $ component install yuehu/switch

## API

```js
var switcher = new Switch()
```

### .label(on, off)

Text for on/off label. Define in Chinese:

```js
switcher.label('开', '关')
```

### .change(value)

Accept `true` and `false`. Change switcher to true or false.

### .toggle()

Toggle on/off the swither.

### .takeover(element)

The element should be a `<input type="checkbox">`. It will hide the given
element, and when swither is on the checkbox will be checked.

### .value()

Get or set value.

## Events

When switcher value changes, it will emit a `change` event.

```js
swither.on('change', function(value) {
  // value is true or false
})
```

## License

  MIT
