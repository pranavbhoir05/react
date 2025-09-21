import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Get the container where elements will be added
const rootContainer = document.getElementById("root")

// Custom render function
function customRender(elements, container){
    const newDomElement = document.createElement(elements.type)

    // Set its inner content
    newDomElement.innerHTML = elements.children

    // Set attributes dynamically
    for (const key in elements.props){ 
        newDomElement.setAttribute(key, elements.props[key])
    }

    // Append the element to the container
    container.appendChild(newDomElement)
}

// const elementsToRender = {
//     type : 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'click me for Google Link ninja'
// }

// Call the render function
// customRender(elementsToRender, rootContainer)



const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"


//correct syntax 
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
    
)

ReactDOM.createRoot(document.getElementById("root")).render(
    reactElement
)

