exports.handler = async (event) => {
    const msg = "Amruta says " + event.keyword
    const response = {
        statusCode: 200,
        body: msg
    };
    return response;
};
