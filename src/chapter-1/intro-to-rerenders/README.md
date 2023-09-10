# advanced techniques

Always seperate the components to contain it's own tree to avoid re-renders.

this happens with hooks as well. it will still trigger the re-render.
A way of thinking at hooks is that they're pockets for trolley. you can grab 10kg into your hands, or put it into your pockets, you'll still be heavy with 10kgs.

ex: Modal Component against slower components.

The way of fixing this issue is by separating the state into other components tree.

Here we had the modal directly used with his state in ```js App.tsx```, for this reason the other components were re-rendered as well, and for the sake of the example.



