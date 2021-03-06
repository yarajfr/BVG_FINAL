const model = require('./bvgModel.js');

exports.listAction = async function(request, response) {
    console.log('listAction');
    model.getAll().then(
        data => {
            console.log(data);
            response.send(data);
        },
        error => {
            console.log(error);
            response.send(error);
        }
    );
}

exports.listPersonalId = async function(request, response) {
    model.getPersonalId(request.params.id).then(
        data => {
            response.send(data);
        },
        error => response.send(error),
    );
}

exports.listBus = async function(request, response) {
    console.log('listBusdaten');
    model.getBus(request.params.nr).then(
        data => {
            console.log(data);
            response.send(data);
        },
        error => {
            console.log(error);
            response.send(error);
        }
    );
}

exports.listBussePruefer = async function(request, response) {
    console.log(request.params);
    console.log(request.params.prueferNr);

    model.getBussePruefer(request.params.prueferNr).then(
        data => {
            response.send(data);
        },
        error => response.send(error),
    );
}

exports.setPrueferBus = async function(request, response) {
    console.log(request.body);
    console.log(request.params.prueferNr);

    model.setPrueferBus(request.params.prueferNr, request).then(
        data => {
            response.send(data);
        },
        error => response.send(error),
    );
}