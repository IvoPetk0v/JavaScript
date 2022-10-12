function validate(obj) {
    let validValuesOfMethodProp = ["GET", "POST", "DELETE", "CONNECT"];
    let patternUri = /^.*\/|\.[^.]*$/g;
    let supportedVers = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let forbiddenChar = ['<', '>', '\\', '&', "\'", '"'];

    if (!validValuesOfMethodProp.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!obj.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (obj.uri !== "*" && !obj.uri.match(patternUri)) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!supportedVers.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (!obj.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }
    Array.from(obj.message).forEach(char => {
        if (forbiddenChar.includes(char)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    });
    return obj;
}

validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
validate({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  });