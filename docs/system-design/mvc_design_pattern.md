# MVC desing Pattern

- The **Model** contains only the pure application data, it contains no logic describing how to present the data to a user.
- The **View** presents the model’s data to the user. The view knows how to access the model’s data, but it does not know what this data means or what the user can do to manipulate it.
- The **Controller** exists between the view and the model. It listens to events triggered by the view (or another external source) and executes the appropriate reaction to these events. In most cases, the reaction is to call a method on the model. Since the view and the model are connected through a notification mechanism, the result of this action is then automatically reflected in the view.

![MVC-Design-Pattern](https://media.geeksforgeeks.org/wp-content/uploads/MVC-Design-Pattern.png)

## Advantages

- Multiple developers can work simultaneously on the model, controller and views.
- MVC enables logical grouping of related actions on a controller together. The views for a specific model are also grouped together.
- Models can have multiple views.

## Disadvantages

- The framework navigation can be **complex** because it introduces new layers of abstraction and requires users to adapt to the decomposition criteria of MVC.
- Knowledge on multiple technologies becomes the norm. Developers using MVC _need to be skilled_ in multiple technologies.
