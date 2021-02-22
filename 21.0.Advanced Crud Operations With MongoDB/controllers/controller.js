let UserDb = require("../model/model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "The Inputs cannot be empty!" });
    return;
  }
  const user = new UserDb({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    country: req.body.country,
    city: req.body.city,
  });

  user
    .save(user)
    .then((data) => {
      //res.send(data);
      res.redirect('/add')
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    UserDb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    UserDb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            message:
              err.message || "Error Occurred while retriving user information",
          });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "The Inputs cannot be empty !",
    });
  }
  const id = req.params.id;
  UserDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot By update because the user not be found !",
        });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error Update User information",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  UserDb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with this ${id}, Id is wrong!`,
        });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: `Cound not delete user with this ${id}`,
      });
    });
};
