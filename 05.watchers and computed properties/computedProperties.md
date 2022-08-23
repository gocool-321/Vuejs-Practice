# Computed Properties:

<p>Computed Properties are special kind of methods which will get called when the appropriate data member was changed and we'll simply refer this function(Instead of calling them!).</p>

```js
    const app = Vue.createApp({
        data(){ return {
            someData: 0;
        }}
        methods(){ ... }
        watch(){...}
        compute(){
            someComputedProp(){
                this.someData += 1
                // Will execute only when we call "someComputedProp"
            }
        }

    })
```
