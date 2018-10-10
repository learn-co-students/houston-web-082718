# DOM

- What?
- Developer tools
- Selectors: id, class, tag, combining
- Selecting (array-like)

```js
node.querySelector('#unique-element')
node.querySelectorAll('.some-shared-class')
node.getElementsByTagName('body')[0]
node.getElementById('unique-element')
node.getElementsByClassName('some-shared-class')
```

- Modifying
  - attributes (style, src)
  - innerText vs innerHTML
  - removing

- Creating
  - createElement
  - appendChild
  - innerHTML

# Event listeners

- Why?
- How?
- click, keydown, submit, DOMContentLoaded
- callback, event (different properties)
  - event.target
  - event.target.children
- `this` inside callback (arrow function)
- inputs and forms
- Event delegation
- Bubbling, stopPropagation
- data attribute

# Intro To The DOM JS

## SWBATs
* Define the DOM and DOM nodes
* Add event listeners to DOM elements
* Query the DOM using selectors
* Manipulate the DOM by adding, removing, and editing the properties of DOM elements
* Use (or at least recognize) jQuery
* Use the Chrome Developer tools to debug

## Resources
* [The DOM](https://www.youtube.com/watch?v=oVp-CKK25NM)

## Outline

```
  10m | The Document Object Model and Developer Tools
   5m | CSS Selectors
  10m | Selecting DOM Nodes
  10m | Modifying DOM Nodes
  10m | Creating DOM Nodes
  15m | Activity
  ----|----
  60m | Total
```

### The Document Object Model
* What is the DOM?
  * Object-oriented representation of the webpage which allows programs to manipulate the properties and contents on the page
  * When HTML is compiled, the DOM is created based on that HTML
  * Javascript is a language created to manipulate the DOM

* Brief tour of Developer Tools
  * Open the Dev Tools by right-clicking on the page and selecting 'View Page Source' from the context menu
  * View DOM in the 'Elements' tab
    * Show that HTML is directly editable in the main panel
    * Show 'Styles' tab to view and manipulate CSS
    * Show pointer feature to find elements by hovering over the DOM
  * JS Console
    * If they haven't seen it already, show them how the console works

### CSS Selectors
* Individual selectors
  * Class `.class`
  * ID `#id`
  * Tag `div`
* Combining Selectors
  * Space between `#parent .child`
  * Chain `div.image.highlighted`

### Selecting DOM Nodes
* Understand types that are returned form selecting a DOM node with JavaScript
* Understand how to use CSS selectors
* Methods

  ```js
  node.querySelector('#unique-element')
  node.querySelectorAll('.some-shared-class')
  node.getElementsByTagName('body')[0]
  node.getElementById('unique-element')
  node.getElementsByClassName('some-shared-class')
  ```
  * Mention that `NodeList` is array-like, but does not have iterators built on it. Can be borrowed from `Array.prototype`
  * Chain CSS selectors to get greater specificity

### Modifying DOM Nodes
* Storing node in a variable `let body = document.querySelector('body')`
* Changing attributes `body.style.backgroundColor = red`
* `innerText` and `textContent` vs. `innerHTML`
* Removing elements `document.removeChild(body)`

### Creating DOM Objects
* Instantiating new elements `let element = document.createElement('img')`
* Adding attributes to elements `element.src = 'http://www.coooolimage.com'`
* Appending to node `document.body.appendChild(element)`

### Activity
Students will go to their favorite websites and modify the DOM programmatically. Wikipedia and Twitter are good examples.

* Students should:
  * Select elements and save them to variables
  * Delete at least 2 elements
  * Modify elements (e.g., replace image url, change text, change CSS)
  * Create new elements and add to page

* Encourage students to think programmatically about the DOM by giving them problems that involve iteration and the use of multiple CSS selectors
  * Change all instances of one word
  * Replace all images on only a certain portion of the DOM
  * Change every other header
  * Bonus (Hard): replace all elements of one tag to another (e.g., `p` to `h1`)

  # Event Listeners

## SWBATs 
* Create event listeners
* Distinguish between event types
* Explain when and why to use event listeners
* Write event listeners as stand-alone functions and in-line functions
* Use event listeners to manipulate the DOM
* Delegate events using the `event.target`
* Synthesize knowledge of forms with event listeners

## Resources

* [JavaScript Events](https://www.youtube.com/watch?v=Wvt6cj87vYQ)

## Outline
```
  10m | Introduction to Events
  10m | Inside an Event Listener Callback
  15m | Basic Event Implementation
  10m | Events and Forms 
  15m | Event Delegation
  ----|----
  60m | TOTAL
```

### Introduction to Events

* Why use event listners?
  * As programmers, we interact with the DOM using JS; typical end-users do not
  * In order for a user to interact with a page, events must be triggered to initiate JS code
  * May be useful to go to a real website with a lot of user interaction and describe the listeners that are on that page
* Add event listeners to the DOM using `addEventListener` on DOM elements
* `addEventListener` is an HOF that takes two arguments: a string designating the event type and a callback
  * Useful to show an event listener callback defined as a normal function, then in-line
* [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
* [W3Schools Event Reference](https://www.w3schools.com/jsref/dom_obj_event.asp)
* Highlight common event types: 
  * `click `
  * `keydown` vs `keyup` vs `keypress`
  * `submit`
  * `DOMContentLoaded`
  
### Inside an Event Listener Callback

* When an event listener is called, the listener attempts to pass the event object to provided callback, therefore the event object is only available if we declare it as an argument.
* Different events have different properties
  * Mouse events have mouse coordinates
  * Key events have information about pressed key
  * Etc.
* `event.target`
  * Returns the DOM element upon which the event was triggered
  * `event.target.children` gives array of all children of that target
* `this` inside an event listener callback is `undefined`; use `bind` or arrow functions to bind context

### Basic Event Implementation

* Main goal is to show the overall pattern of event listeners
  * User interaction with the DOM leads to a function chain that typically ends in DOM manipulation
    1. Find DOM element that will act as trigger
    2. Add event listener to DOM element
    3. Inside of event listener callback one might:
      * Prepare data
      * `setTimeout` or `setInterval`
      * Change attributes/values of target or other DOM elements
      * Add or remove DOM elements 
* Using a static HTML page, add event listeners to HTML elements to change their properties. 
* Examples of things to show:
  * Iterate through a list and add event listeners that change their styling properties and/or text on click
  * Add an event listener to a `div` that on `keydown` adds that key to the text of one or more DOM elements.
  * Add a button that starts and stops a timer
  * Make a delete listener that deletes any element on the page `onClick` **this is a great example to preview event delegation**

  ```js
  document.addEventListener("click", (event)=>{
    event.preventDefault()
    event.target.remove()
  })
  ```
  
### Events and Forms

* In order to obtain user input, we use `input` tags and use their `value` attribute to access their contents
* [Input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
  * text (default)
  * number
  * submit
  * radio/checkbox
  * ...many more
* There are two typical ways to handle a submission: using a form with a `submit ` event or a button with a `click` event
  * Gotchas to using form `submit` event
    * `submit` events can only be triggered by form elements
    * `preventDefault` to prevent the default action of a submit event: a page reload
    * Can grab the relevant inputs using the event object only if theinputs are children of the form; otherwise the inputs must be found manually
  * Gotchas to using `click` event submission
    * Pressing the return key will not submit
    * You will not be able to use the event object to locate the target inputs and instead must be found manually
* Typical flow for a form: 
  1. User enters input
  2. An event triggers (form submission or click)
  3. In the event, relevant input elements are found
  4. Values are pulled from input elements
  5. Those values are used for whatever purpose (storing, sent out in a fetch for storage in a database)
  6. Usually ends in some sort of DOM manipulation (creation or edition of elements)


### Event Delegation
* Useful to show students HTML that is nested **and** can execute two different actions
  * An example of this is a `div` -> `ul` -> many `li` structure. The `li` can contain both some text and a button: clicking the text executes one action; clicking the button executes another. This allows us to show two types of delegation: delegation with a dynamic number of elements (i.e. the list) and delegation with different outcomes (i.e. the two actions)
    
    ```html
    <div>
      <ul>
        <li>
          <text>Meow</text>
          <button>Delete</button>
        </li>
        <li>
          <text>Woof</text>
          <button>Delete</button>
        </li>
        <li>
          <text>Quack</text>
          <button>Delete</button>
        </li>
      </ul>
    </div>
    ```
    
    ```js
    let textEls = document.querySelectorAll('text')
    
    textEls.forEach(text => {
      text.addEventListener("click", (event) => alert(event.target.textContent))
    })
    
    let buttons = document.querySelectorAll('button')
    
    buttons.forEach(button => {
      button.addEventListener("click", (event) => event.target.parentNode.remove())
    })
    ```
* Stress the point that without delegation, we would have to add event listeners to every element individually
  * A prebuilt form that `onSubmit` appends another element to the list would be handy. Show them that the event listeners need to be added at the time of the element's creation 
      
    ```html
    //...above mentioned code
    
    <form>
      <input id="noise-input" type="text" placeholder="Make a noise!" />
      <input type="submit">Submit!</input>
    <form>
    ```
    ```js
    let form = document.querySelector('form')
    
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      let input = document.querySelector("input#noise-input")
      let ul = document.querySelector("ul")
      
      
      let text = document.createElement("text")
      text.textContent = input.value
      text.addEventListener("click", (event) => alert(event.target.textContent))
      
      let button = document.createElement("button")
      button.textContent = "Delete"
      button.addEventListener("click", (event) => event.target.parentNode.remove())
      
      let li = document.createElement("li")
      li.append(text)
      li.append(button)
      
      ul.append(li)
      
      input.value = ""
    })
  
    ```
* Aside to bubbling and capturing
  * Events bubble up from children to parents all the way up to the top of document, triggering all event listeners along the way
  
    ```html
    <div id="container">
      <ul id="list">
        <li id="item">Click Me!</li>
      </ul>
    </div>
    ```
  
    ```js
    let div = document.getElementById("container")
    let ul = document.getElementById("list")
    let li = document.getElementById("item")
    
    function logThisAndTarget(event){
      console.log("THIS", this)
      console.log("TARGET", event.target)
    }
    div.addEventListener("click", logThisAndTarget)
    ul.addEventListener("click", logThisAndTarget)
    li.addEventListener("click", logThisAndTarget)
    ```

  * `stopPropagation` can be used to prevent bubbling
* We can use bubbling to our advantage by attaching the listener to a container element and using attributes of the `event` to identify the precise element upon which the event was triggered.
  * Use the event to identify which action to trigger

    ```js
    function listener(event){
      switch (event.target.tagName){
        case "LI":
          console.log("li things")
        case "BUTTON":
          console.log("button things")
        default:
          console.log("everything else")
      }
    }
    ```
  * Use the event to identify which item in a list was clicked using a dynamically generated id
    * Useful to show the use of the `data` attribute on HTML elements as a better alternative
    
    ```html
    <div id="noise-container">
      <ul>
        <li data-animal="cat">
          <text>Meow</text>
          <button>Delete</button>
        </li>
        <li data-animal="dog">
          <text>Woof</text>
          <button>Delete</button>
        </li>
        <li data-animal="duck">
          <text>Quack</text>
          <button>Delete</button>
        </li>
      </ul>
    </div>
    ```
    
    ```js
    let noiseContainer = document.querySelector("div#noise-container")
    
    noiseContainer.addEventListener('click', event => {
      
    })
    
    ```