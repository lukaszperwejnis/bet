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
const MatchNotFoundException_1 = require("../exceptions/MatchNotFoundException");
const mapSchemaValidationErrors_1 = require("../helpers/mapSchemaValidationErrors");
const Controller_1 = require("./Controller");
const MatchBetRepository_1 = require("../Repository/MatchBetRepository");
const validationSchemaKeys_1 = require("../constants/validationSchemaKeys");
const BetLateException_1 = require("../exceptions/BetLateException");
const matchBetByScores_1 = require("../helpers/matchBetByScores");
const MissingIdException_1 = require("../exceptions/MissingIdException");
const isValidObjectId_1 = require("../helpers/isValidObjectId");
const InvalidIdException_1 = require("../exceptions/InvalidIdException");
const MatchRepository_1 = require("../Repository/MatchRepository");
const Joi = require('@hapi/joi');
class MatchBetController extends Controller_1.Controller {
    constructor() {
        super();
        this.matchRepository = new MatchRepository_1.MatchRepository();
        this.matchBetRepository = new MatchBetRepository_1.MatchBetRepository();
        this.createOne = this.createOne.bind(this);
        this.getOne = this.getOne.bind(this);
        this.getMany = this.getMany.bind(this);
        this.getAvailable = this.getAvailable.bind(this);
    }
    createOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object({
                matchId: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.COMMON.ID,
                homeScore: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.USER_BET.SCORE,
                awayScore: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.USER_BET.SCORE,
            });
            const { error } = schema.validate(req.body);
            if (error) {
                return this.validationBadRequest(res, mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
            }
            try {
                const createdBy = req.user._id;
                const { matchId, homeScore, awayScore } = req.body;
                const match = yield this.matchRepository.findById(matchId);
                if (!match) {
                    next(new MatchNotFoundException_1.MatchNotFoundException(matchId));
                }
                if (new Date().getTime() > new Date(match.scheduledDate).getTime()) {
                    next(new BetLateException_1.BetLateException(matchId));
                }
                const doc = yield this.matchBetRepository.createOne(Object.assign(Object.assign({}, req.body), { bet: matchBetByScores_1.matchBetByScores(homeScore, awayScore), match,
                    homeScore,
                    awayScore,
                    createdBy }));
                return this.created(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            if (!id) {
                next(new MissingIdException_1.MissingIdException());
            }
            if (!isValidObjectId_1.isValidObjectId(id)) {
                next(new InvalidIdException_1.InvalidIdException());
            }
            try {
                const doc = yield this.matchBetRepository.findById(id);
                if (!doc) {
                    next(new MatchNotFoundException_1.MatchNotFoundException(id));
                }
                return this.ok(res, doc);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getMany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdBy = req.user._id;
                const docs = yield this.matchBetRepository.find({ createdBy });
                return this.ok(res, docs);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAvailable(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdBy = req.user._id;
                const scheduledMatches = yield this.matchRepository.find({ status: "SCHEDULED" /* SCHEDULED */ });
                const userMatchBets = yield this.matchBetRepository.find({ createdBy }).then(data => data.map(el => el.game._id));
                const availableMatchBets = scheduledMatches.filter(bet => !userMatchBets.includes(bet._id));
                return this.ok(res, availableMatchBets);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.MatchBetController = MatchBetController;
//# sourceMappingURL=GameBetController.js.map
