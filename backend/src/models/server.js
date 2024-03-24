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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const field_routes_1 = __importDefault(require("../routes/field.routes"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const reservation_routes_1 = __importDefault(require("../routes/reservation.routes"));
const feedback_routes_1 = __importDefault(require("../routes/feedback.routes"));
const cancellation_routes_1 = __importDefault(require("../routes/cancellation.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const morgan_1 = __importDefault(require("morgan"));
const field_1 = __importDefault(require("./field"));
const user_1 = __importDefault(require("./user"));
const reservation_1 = __importDefault(require("./reservation"));
const feedback_1 = __importDefault(require("./feedback"));
const cancellation_1 = __importDefault(require("./cancellation"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4001';
        this.dbConnect();
        this.midlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`.america);
        });
    }
    routes() {
        this.app.use('/api/fields', field_routes_1.default);
        this.app.use('/api/users', user_routes_1.default);
        this.app.use('/api/users', auth_routes_1.default);
        this.app.use('/api/reservation', reservation_routes_1.default);
        this.app.use('/api/feedback', feedback_routes_1.default);
        this.app.use('/api/cancellation', cancellation_routes_1.default);
    }
    midlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); // Parse incoming requests with
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield field_1.default.sync();
                yield user_1.default.sync();
                yield reservation_1.default.sync();
                yield feedback_1.default.sync();
                yield cancellation_1.default.sync();
                console.log(`Database connected`.bgGreen);
            }
            catch (error) {
                console.log(`Unable to connect to the database ${error}`.bgRed);
            }
        });
    }
}
exports.default = Server;
