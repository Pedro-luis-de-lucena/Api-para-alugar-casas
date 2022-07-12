import House from '../model/House';
import Reserve from '../model/Reserve';
import User from '../model/User';

class ReserveController {
  async index(req, res) {
    const { user_id } = req.headers;

    const reserves = await Reserve.find({ user: user_id }).populate('house');
    return res.json(reserves);
  }

  async store(req, res) {
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const house = await House.findById(house_id);
    if (!house) {
      return res.status(400).json({ error: 'O que esta procurando nao existe.' });
    }
    if (house.status !== true) {
      return res.status(400).json({ error: 'Solicitacao indisponivel.' });
    }
    const user = await User.findById(user_id);
    if (String(user_id) === String(house.user)) {
      return res.status(401).json({ error: 'Reserva nao permitida' });
    }
    const reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });

    return res.json(reserve);
  }

  async destroy(req, res) {
    const { reserve_id } = req.body;

    await Reserve.findByIdAndDelete({ _id: reserve_id });

    return res.send();
  }
}

export default new ReserveController();
