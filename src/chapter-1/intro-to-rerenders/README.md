# advanced techniques

Always seperate the components to contain it's own tree to avoid re-renders.

this happens with hooks as well. it will still trigger the re-render.
A way of thinking at hooks is that they're pockets for trolley. you can grab 10kg into your hands, or put it into your pockets, you'll still be heavy with 10kgs.

ex: Modal Component against slower components.

The way of fixing this issue is by separating the state into other components tree.

Here we had the modal directly used with his state in `js App.tsx`, for this reason the other components were re-rendered as well, and for the sake of the example.

Points to remember:

- re-rendering is how React updates components with new data. Without re-renders, there will be no interactivity in our apps.

- state update is the initial source of all re-renders.

- if a component's re-render is trigger, all nested componetns inside that component will be re-rendered

- during the normal React re-renders cylce (without the use of memoization), props change doesn't matter: components will re-render even if they don't have any props.

- we can use the pattern known as "moving state down" to prevent unnecessary re-renders in the big apps.

- state update in a hook will trigger the re-render of a component that uses this hook, even if the state itself is not used

- in the case of hooks using other hooks, any state update within that chain of hooks will trigger the re-render of a component that use the very first hook.
