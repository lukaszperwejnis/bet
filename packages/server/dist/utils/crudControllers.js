"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = model => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = yield model
            .findOne({ createdBy: req.user._id, _id: req.params.id })
            .lean()
            .exec();
        if (!doc) {
            return res.status(400).end();
        }
        res.status(200).json({ data: doc });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
});
exports.getMany = model => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docs = yield model
            .find({ createdBy: req.user._id })
            .lean()
            .exec();
        res.status(200).json({ data: docs });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
});
exports.createOne = model => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdBy = req.user._id;
    try {
        const doc = yield model.create(Object.assign(Object.assign({}, req.body), { createdBy }));
        res.status(201).json({ data: doc });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
});
exports.updateOne = model => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedDoc = yield model
            .findOneAndUpdate({
            createdBy: req.user._id,
            _id: req.params.id
        }, req.body, { new: true })
            .lean()
            .exec();
        if (!updatedDoc) {
            return res.status(400).end();
        }
        res.status(200).json({ data: updatedDoc });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
});
exports.removeOne = model => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removed = yield model.findOneAndRemove({
            createdBy: req.user._id,
            _id: req.params.id
        });
        if (!removed) {
            return res.status(400).end();
        }
        return res.status(200).json({ data: removed });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
});
exports.crudControllers = model => ({
    removeOne: exports.removeOne(model),
    updateOne: exports.updateOne(model),
    getMany: exports.getMany(model),
    getOne: exports.getOne(model),
    createOne: exports.createOne(model)
});
//# sourceMappingURL=crudControllers.js.map