# watchers:

<p>Watcher are special kind of methods which will get called when the appropriate data member was changed.</p>

```js
    const app = Vue.createApp({
        data(){ return {
            someData: 0;
        }}
        methods(){ ... }
        watch(){
            someData(){
                console.log("someData variable was changed!")
            }
        }

    })
```
