const BASE_URI = "http://localhost:3000/";
const headers = {
    headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Accept": "application/json"
    }
};

const connect = async (args) => {
    const endPoint  = args["endPoint"];
    const body =  args["body"];
    const method = args["method"];
    const token  = args['token'] || '';
    const authorization = token ?  `Bearer ${token}` : '' ;
    headers["headers"]["Authorization"] = authorization;
    const uri = BASE_URI+endPoint; 
    const options = {
        method: method,
        headers: headers["headers"],
        body: JSON.stringify(body)
    }
    const response = await fetch(uri,options)
    if ( !response.ok ) {
        const error = await response.json();
        
        throw new Error(error["message"]);
    }

    return await response.json();
};



export const register = async (args) => {
    return await connect(args);
}