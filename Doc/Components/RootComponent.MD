# RootComponent


Used to wrap your app. Define this component once, at the root of your project. (Well, like its name suggest it..)
This component provides UI modules used at the very top of your project, like Alerts and Modales. Since you can use that UI components elsewhere, you can be sure that theses will appears over all your app.

Stack name from RootComponent is **rootApp**

## Methods


### fireTopAlert(text,milliseconds,style)

#### Description
*Display attached [TopAlert](https://github.com/webismymind/Mycellium/blob/master/Doc/Components/TopAlert.MD) Component.*

#### Parameters
text : (string) Text to display.<br />
milliseconds (int) Number of milliseconds of alert display.<br />
style : (object) Styling object. Currently accept "backgroundColor" and "color"<br />

#### Example
```javascript
Stack.getItem('rootApp').fireTopAlert('Hello',1500, {color:'white', backgroundColor: 'green'});
```


### showLoader()

#### Description
*Show attached [Loader](https://github.com/webismymind/Mycellium/blob/master/Doc/Components/Loader.MD) Component.*

#### Example
```javascript
Stack.getItem('rootApp').showLoader();
```


### hideLoader()

#### Description
*Hide attached [Loader](https://github.com/webismymind/Mycellium/blob/master/Doc/Components/Loader.MD) Component.*

#### Example
```javascript
Stack.getItem('rootApp').hideLoader();
```




