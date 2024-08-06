// const heading1 = React.createElement("h1",{h1:"heading"},"Hello world from react")

const root1 = ReactDOM.createRoot(document.getElementById("root"))

// root1.render(heading1)

// nested tag or inside the parent 

// <div class="parent">
//  <div class="child">
//     <h1></h1>
//  </div>
// </div>

const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div",{id:child}, 
        
        [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h1",{},"I'm an h1 tag")]
    )
)

root1.render(parent)