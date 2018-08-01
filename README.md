# chance-object

> A [Chance.js mixin](http://chancejs.com/#mixin) to generate objects.

## Install

### NPM

```
$ npm i chance-object
```

### Yarn

```
$ yarn add chance-object
```

## Usage

```js
import Chance from 'chance';
import object from 'chance-object';

const chance = new Chance();

chance.mixin({
    object
});

chance.object();
```

By default, `chance-object` will return a randomly generated object.

Example:

```js
{
    randomKey: 'randomValue';
}
```

`chance-object` can also take an optional object as a parameter, which will create a randomly generated object and merge it with the supplied object.

Example:

```js
chance.object({
    key: 'value'
});
```

Result:

```js
{
    randomKey: 'randomValue',
    key: 'value'
}
```

## License

MIT © [Michael Novotny](https://manovotny.com)
