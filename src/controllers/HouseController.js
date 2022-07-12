import * as Yup from 'yup';
import House from '../model/House';
import User from '../model/User';

class HouseController {
  async index(req, res) {
    const { status } = req.query;

    const house = await House.find({ status });

    return res.json(house);
  }

  async store(req, res) {
    const Schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });
    const { filename } = req.file;
    const {
      description, price, location, status,
    } = req.body;
    const { user_id } = req.headers;

    if (!(await Schema.isValid(req.body))) {
      return res.status(400).json({ error: 'falha' });
    }

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,

    });

    return res.json({ house });
  }

  async update(req, res) {
    const Schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });
    const { filename } = req.file;
    const { house_id } = req.params;
    const {
      description, price, location, status,
    } = req.body;
    const { user_id } = req.headers;

    if (!(await Schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha' });
    }

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (string(user._id) !== string(House.user)) {
      return res.status(401).json();
    }

    await House.updateOne({ _id: house_id }, {

      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,

    });

    return res.send();
  }

  async destroy(req, res) {
    const { house_id } = req.body;
    const { user_id } = req.headers;

    await House.findByIdAndDelete({ _id: house_id });

    return res.json({ message: 'excluido com sucesso' });
  }
}

export default new HouseController();
