import React, {useState} from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, categories }) => {

const [inputValue, setInputValue] = useState("");

const handleInputChange = (e) => {
    setInputValue(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();

    categories.forEach((element, index) => {
        if(element.toUpperCase() === inputValue.toUpperCase()) {
            categories.splice(index, 1);
        }
    })
    
    if(inputValue.trim().length > 1 && inputValue.trim().length < 35 ) {
        setCategories(( categories ) => [inputValue, ...categories]);
        setInputValue("");
    }

    setInputValue("");
}

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Type about something..."
                value= { inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
