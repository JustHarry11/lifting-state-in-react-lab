// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
console.log(props.stack)
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target) 
  props.addStack(event.target)
}
return (
  <ul>
  {props.stack.map((ingredient, index) => {
      return (
          <form key={index} onSubmit={handleSubmit}>
              <li>{ingredient.name}<button type="submit">+</button></li>
              
          </form>
  )
  })}
  </ul>
)

};
  
  export default BurgerStack;
  