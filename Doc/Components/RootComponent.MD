#RootComponent
Used to wrap your app. Define this component once, at the root of your project. (Well, like its name suggest it..)
This component provides UI modules used at the very top of your project, like Alerts and Modales. Since you can use that UI components elsewhere, you can be sure that theses will appears over all your app.

Stack name from RootComponent is **rootApp**

##Methods


###fireTopAlert(text,milliseconds,style)

**Description**
*Display a simple notification UI component. From the top of the screen.*

**Parameters**
text : (string) Text to display.
milliseconds (int) Number of milliseconds of alert display.
style : (object) Styling object. Currentluy accept "backgroundColor" and "color"

**Example**
```javascript
Stack.getItem('rootApp').fireTopAlert('Hello',1500, {color:'white', backgroundColor: 'green'});
```



