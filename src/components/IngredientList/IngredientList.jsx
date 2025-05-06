// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target) 
        props.addStack(event.target)
    }

    return (
        <ul>
        {props.availableIngredients.map((availableIngredient, index) => {
            return (
                <form key={index} onSubmit={handleSubmit}>
                    <li>{availableIngredient.name}<button type="submit">+</button></li>
                    
                </form>
        )
        })}
        </ul>
    )

  };
  
  export default IngredientList;
