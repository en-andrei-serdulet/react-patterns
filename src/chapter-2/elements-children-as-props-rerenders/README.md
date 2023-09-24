# advance techniques

Avoiding re-renders for slow components that do not care about the other component state is the best to be wrapped and send as a children and to be at the same level as the other component

A component is just a function that accepts an argument(props) and returns Elements that should be rendered
when this Component renders on the screen; const A = () => <B/>;

An Element is an object that describes what needs to be rendered on the screen; const b = <B/>

Re-render is just React calling the Component's function - invoking it.

A component re-renders when its element object changes, as we're using Object.is(BeforeRender, AfterRender) - if it's true it won't re-render, if it's false it will because the two objects are not the same.

children are just props and behave like any other prop when they're passed with JSX syntax.