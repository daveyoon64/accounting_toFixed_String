# isPrototypeOf Remaster

## Description
isPrototypeOf checks if an object exists in prototype chain

## Parameters
possiblePrototype: test if objToTest is a prototype of possiblePrototype
objTarget: the object we're testing

# Returns
true if object exists in the prototype chain, false otherwise

## Notes on Features for isPrototypeOf Remaster
- How it should work:
```javascript
Object           <-- is prototype of Foo (and everything below)
	Foo          <-- is prototype of Bar (and everything below)
		Bar      <-- is prototype of Baz (and everything below)
			Baz  <-- is prototype of baz (and everything below)
				baz                      (and everything below)
```
