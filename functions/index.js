const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

exports.createDataTest = functions.https.onRequest((request, response) => {
    db.collection('goodsList').get()
    .then((snapshot) => {
        var docRef = db.collection('goodsList').doc((snapshot.size + 1).toString());

        return setAda = docRef.set({
            goodName: request.body.goodName,
            familyName: request.body.familyName,
            formName: request.body.formName,
        }).then(res => {
            return response.send(JSON.stringify({ message: res }));
        }).catch(err => {
            return response.send(JSON.stringify({ message: err }));
        });
    })
    .catch((err) => {
        return response.send(JSON.stringify({ message: err }));
    });
});

exports.searchDataTest = functions.https.onRequest((request, response) => {
    var ref = db.collection('goodsList');

    db.collection('goodsList').get()
        .then(snapshot => {
            var dataList = [];
            snapshot.forEach(doc => {
                dataList.push(doc.data());
            });
            return response.send(JSON.stringify({ data: dataList }));
        })
        .catch(err => {
            response.send(JSON.stringify({ message: err }));
        });
});