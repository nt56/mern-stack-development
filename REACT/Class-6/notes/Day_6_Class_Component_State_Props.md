

*********************************************

# 2.Statefull Class Component - 

We can extend
Reusable

render method
                Used in class component        
                pure method -( input output results are same)
                Used to render our JSX code on a browser i.e html js,array,object,fragment..
                It doesn't directly interact with browser and dosent modify state



# State

Built in react object in a class component
hold data and have state.



# Adv Topic
 Lifecycle methods


## Disadvantage


Complex In config
Heavy and slow interaction
Consume more memory
Not support to low level features
Cant directly interact with hardware services


### extends

React.Component => parent Component/base class
App- Child Component/derived Component

class App extends React.Component{

}


************************************************

#### Syntax


class App extends React.Component{

        render()
        {
                
                return(
                           <>
        

                           </>
        
)
       
        }
}


***************************************

# State-

built in object in a class component
Holds the data i.e Hold and contains info about component

We can Change and Update state whenever we want i.e on events or actions

- Mutable
- we can change state


## Accessbility

limited to that specific component
Cant access child

Determine behavior of a component and how it will render the data


## Syntax

😊Defined State

this.state=({

        key:value
})

😊Update State

this.setState({

})


*************************************************************


# super method-

 When we inherit parent component in any class  then used super method

i.e So first we need to call parent constructor to accessing parent methods and properties in child or derived class component i.e need to call  

*****************************************

# What is the constructor in JavaScript?

Automatically invoked

A constructor is a special function that creates and initializes an object instance of a class.

In JavaScript, a constructor gets called when an object is created using the new keyword. 

The purpose of a constructor is to create a new object and set values for any existing object properties.

 
 # Syntax

  constructor()
  {
    super();
    console.log('Constructor Called');

  }



******************************************************

# props:   
         built in react object used in functional and class component
         helps to pass data from 1 component to another component
         Immutable i.e We cant Change or update


         Access child component;


 ***************************************

# Can We pass state data through "props" to another Component ?




*********************************************************************





# Events- do something operations on users action or activity


 
 clickHere=()=>{

 }

//Functional component

<button onClick={()=>ClickHere()}></button>
<button onClick={ClickHere}></button>

//class
<button onClick={this.ClickHere}></button>
<button onClick={()=>this.ClickHere()}></button>

//render method
<button onClick={clickhere}></button>


for this u need  bind method 
<button onClick={this.Demo}></button>
<button onClick={this.Demo}></button>


<button onClick={()=>Demo()}></button>




function clickHere()
{

}




this.state=({

stud1:true,
stud2:false,
stud3:false,

})


button onClick




{
        this.state.stud1:

<div>
//student data
</div> :null


}





this.setState({

stud1()
{
        this.setState({
                stud1:!this.state.stud1
                stud2:false
                stud2:false
        })
}
})


# Data Binding

In React -  One Way Binding-  One directional Data flow - parent to child
in Angular-  Two way binding


