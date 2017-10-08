# ViewSwitcher

ViewSwitcher is a component in which you can register named components. After that, you can easily switch them while updating theirs props on the fly.
It keeps a little history with a back function.
Consider it as a lightweight "nav" component. 

## Props

**defaultView** : name of the first view to be displayed <br />
**defaultProps** : props to be passed to the default displayed component.

## Methods

### registerView(name, component)

#### Description
*Register a "view" you can call later.* 

#### Parameters
**name** should be unique <br />
**component** A react component to be displayed

### switchView(name, props)

#### Description
*Display the view bound to the name, with props of your choice.*

#### Parameters
**name** should be unique <br />
**props** props passed to the displayed component.<br />

### hasHistory()

#### Description
*Returns true or false depending on the presence of a history*

### goBack() {

#### Description
*Go back to the previous view with props passed at that time*

## Full example

```javascript

class ExampleView extends React.Component {
    render() {
        return(<Text>{this.props.hello}</Text>) ;
    }
}

class MyComponent extends React.Component {

    componentDidMount(){
   
        //Register the ExampleView with name "example"
        this.viewSwitcher.registerView('example',ExampleView)
        
        //Swicth view with props
        this.viewSwitcher.switchView('example',{hello:'hi'});
        setTimeout(()=> {
             
             //Swicth view others props
            this.viewSwitcher.switchView('example',{hello:'hello world !'});
            setTimeout(()=> {
            
                //Swicth view to its previous state.
                this.viewSwitcher.goBack();
            },2000)
        },2000)
    }
    
    render() {
        return(
            <ViewSwitcher ref={(elem)=>{ this.viewSwitcher = elem; }} />
        );
    }

}

```

