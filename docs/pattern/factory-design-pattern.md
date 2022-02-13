# Factory Design Pattern Theory

> Factory design pattern belongs to Creational design pattern which belongs to Design Patterns in java. [This video](https://www.youtube.com/watch?v=pt1IbV1aSZ4\&list=PLsyeobzWxl7r2ZX1fl-7CKnayxHJA\_1ol\&index=3) contains theory sesssion on factory design pattern. Factory Design Method Pattern defines an interface or abstract class for creating an object but let the subclasses decide which class to instantiate Factory Method Pattern is also known as Virtual Constructor

#### Example

{% embed url="https://www.tutorialspoint.com/design_pattern/images/factory_pattern_uml_diagram.jpg" %}
Factory Pattern
{% endembed %}



```java
public class ShapeFactory {
	
   //use getShape method to get object of type shape 
   public Shape getShape(String shapeType){
      if(shapeType == null){
         return null;
      }		
      if(shapeType.equalsIgnoreCase("CIRCLE")){
         return new Circle();
         
      } else if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();
         
      } else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();
      }
      
      return null;
   }
}
```
