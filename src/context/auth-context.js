import React from 'react';

const AuthContext = React.createContext({
    addIngredientHandler: () => {},
    removeIngredientHandler: () => {},
    disabledInfo: {},
    ingredients: {}
});

export default AuthContext;