const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.getAllPosts = (req, res) => {
  admin
    .firestore()
    .collection("posts")
    .get()
    .then((snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        uid: doc.id,
      }));
      res.json(posts);
    });
};
