const Call = async ( url )=> {
    try {
        const response = await fetch(url);
        return response.json();

    } catch (err) {
        if(!err.response) throw err;
            const { response: {data: {error}}} = err;
        if(error) err.message = error;

        throw err
    }

}

export default Call;