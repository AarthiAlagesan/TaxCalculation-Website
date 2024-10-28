const mongoose = require('mongoose');

const TaxDetailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    salary: { type: Number, required: true },
    houseProperty: { type: Number, required: true },
    otherSources: { type: Number, required: true },
    totalIncome: { type: Number, required: true },
    taxPayable: { type: Number, required: true }
});

const TaxDetail = mongoose.model('TaxDetail', TaxDetailSchema);

module.exports = TaxDetail;  // Ensure this export is correct
