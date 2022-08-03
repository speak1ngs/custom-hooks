import { useState } from "react";

export const useForm = ( initialForm = {} ) => {


    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ] : value,
        })
    };

    const onResetForm = () =>{
  
        setFormState( initialForm );
    }

    // ...formState desestructura y envia los valores que estan dentro del objt


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}


