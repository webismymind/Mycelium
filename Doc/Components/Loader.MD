# Loader

This loader take all the parent element size with an overlay, preventing the user to tap elements underneath it. 

## Methods

### show()

#### Description
*Show the loader.*

### hide()

#### Description
*Hide the loader.*


### setStyle(style)

#### Description
*Define some graphics into the component*

#### Parameters
style : (object) Object containing styles. For now you can define theses:<br />

- overlay (View component)
- box (View component)


### setSpinner(component)

#### Description
*Customize the spinner with your own component. Could be anything !*

#### Parameters
component : (React Component) a React Component (really, your imagination is the limit here)<br />



## Full example

```javascript
loader.setSpinner(<Text>Loading!</Text>);
loader.setStyle({box: {backgroundColor:'red'}});
loader.show();
    
setTimeout(() => {
    loader.hide();    
},3000)

```

