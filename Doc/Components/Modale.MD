# Loader

This loader take all the parent element size with an overlay, preventing the user to tap elements underneath it. 

## Methods

### show()

#### Description
*Show the modale.*

### hide()

#### Description
*Hide the modale.*


### setStyle(style)

#### Description
*Define some graphics into the component*

#### Parameters
style : (object) Object containing styles. For now you can define theses:<br />

- overlay (View component)
- box (View component)


### setContent(component)

#### Description
*Fill the modale content with your own component. Could be anything !*

#### Parameters
component : (React Component) a React Component (really, your imagination is the limit here)<br />


## Full example

```javascript
modale.setContent(<Text>I'm the modale content !</Text>);
modale.setStyle({box: {backgroundColor:'red'}});
modale.show();
    
setTimeout(() => {
    modale.hide();    
},3000)

```

