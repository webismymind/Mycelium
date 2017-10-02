# TempNotification

Simple notification component. Displayed from the top of the parent component.<br />
This notification is supposed to be ephemeral. 

## Methods

### fire(text,milliseconds,style)

#### Description
*Display a simple notification UI component. From the top of the screen.*

#### Parameters
text : (string) Text to display.<br />
milliseconds (int) Number of milliseconds of alert display.<br />
style : (object) Styling object. Currently accept "backgroundColor" and "color"<br />

#### Example
```javascript
TempNotification.fire('Hello',1500, {color:'white', backgroundColor: 'green'});
```



