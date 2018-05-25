const admin = require('firebase-admin');

var serviceAccount = require('./weather-e382e-4b6775a50ce2.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();


db.collection('goodsList').get()
    .then((snapshot) => {
        var docRef = db.collection('goodsList').doc((snapshot.size + 1).toString());

        var setAda = docRef.set({
            first: 'eee',
            last: 'Lovessdflace',
            born: 1232
        }).then(res => {
            console.log('Error getting documents', res);
        }).catch(err => {
            console.log('Error getting documents', err);
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });

// var docRef = db.collection('goodsList').doc('goods5');

// var setAda = docRef.set({
//     first: 'eee',
//     last: 'Lovessdflace',
//     born: 1232
// }).then(res => {
//     console.log('Error getting documents', res);
// }).catch(err => {
//     console.log('Error getting documents', err);
// });

// var ref = db.collection('goodsList');

// var query = ref.where('born', '==', 1232).get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             console.log(doc.id, '=>', doc.data());
//         });
//     })
//     .catch(err => {
//         console.log('Error getting documents', err);
//     });