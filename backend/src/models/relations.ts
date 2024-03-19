// relations.js
import User from './user';
import Field from './field';
import Reservation from './reservation';
import Payment from './payment';
import Feedback from './feedback';

// Definir las relaciones entre los modelos
User.hasMany(Reservation);
Reservation.belongsTo(User);

Field.hasMany(Reservation);
Reservation.belongsTo(Field);

User.hasMany(Payment);
Payment.belongsTo(User);

Reservation.hasOne(Payment);
Payment.belongsTo(Reservation);

User.hasMany(Feedback);
Feedback.belongsTo(User);

Reservation.hasOne(Feedback);
Feedback.belongsTo(Reservation);
