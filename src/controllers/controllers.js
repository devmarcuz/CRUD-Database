const Data = require("../models/schema");

exports.createData = (req, res) => {
  Data.create(
    {
      ...req.body,
    },
    (err, data) => {
      if (err) res.status(500).json({ message: err });
      else
        return res
          .status(200)
          .json({ message: "data request was successfull", data });
    }
  );
};

exports.fetchData = (req, res) => {
  Data.find({}, (err, data) => {
    if (err) res.status(500).json({ message: err });
    else return res.status(200).json({ data });
  });
};

exports.updateData = (req, res) => {
  Data.findByIdAndUpdate(req.params.id, { ...req.body }, (err, data) => {
    if (err) res.status(500).json({ message: err });
    else if (!data) res.status(404).json({ message: "data not found" });
    data.save((err, saveData) => {
      if (err) res.status(400).json({ message: err });
      else
        return res
          .status(200)
          .json({ message: "book updated successfully", data: saveData });
    });
  });
};

exports.deleteData = (req, res) => {
  Data.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) res.status(500).json({ message: err });
    else if (!data) res.status(404).json({ message: "data was not found" });
    else return res.status(200).json({ message: "data deleted successfully" });
  });
};
