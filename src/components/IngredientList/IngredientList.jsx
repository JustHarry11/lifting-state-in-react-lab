// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <ul>
        {props.availableIngredients.map((availableIngredient, index) => {
            return (
                <form key={index} onSubmit={handleSubmit}>
                    <li>{availableIngredient.name}</li>
                    <button type="submit">+</button>
                </form>
        )
        })}
        </ul>
    )

  };
  
  export default IngredientList;
  