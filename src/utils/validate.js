export const validateData = (email,password) =>{
        const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
        
        if(!isEmailValid) return "Email is not Valid!";
        if(!isPasswordValid) return "Password is not Valid!";
        return null;
}
// export const validateDataForSignUp = (name,email,password) =>{
//     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//     const isValidName = /^[A-Za-z][A-Za-z' -]{1,49}$/.test(name);
//     if(!isValidName) return "Name is not Valid!";
//     if(!isEmailValid) return "Email is not Valid!";
//     if(!isPasswordValid) return "Password is not Valid!";
//     return null;
// }