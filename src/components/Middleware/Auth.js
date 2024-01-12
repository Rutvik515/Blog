export default function Auth({next}){
    let login = localStorage.getItem('user')
    console.log(login);
       if (login){
           return next();
       }
       return next({
        name:'Login'
    })
    }