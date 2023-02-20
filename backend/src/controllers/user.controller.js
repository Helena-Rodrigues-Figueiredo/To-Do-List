const bcrypt = require('bcrypt');

const { UserService } = require('../services');

const findEmail = async (req, res) => {
  const isBodyValid = (email, password) => email && password;
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res
        .status(400)
        .json({ message: 'Preencha o email e a senha.' });
    }
    const user = await UserService.findEmail(email);

    if (!user) {
        return res.status(400).json({ message: 'Usuário não cadastrado.' }); 
      }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
        return res.status(400).json({ message: 'Senha inválida.' }); 
      }

    res.status(200).json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

const createUser = async (req, res) => {
  const isBodyValid = (name, email, password) => email && password && name;
  try {
    const { name, email, password } = req.body;
    if (!isBodyValid(name, email, password)) {
      return res
        .status(400)
        .json({ message: 'Preencha todos os campos.' });
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt)

    const user = await UserService.createUser({ name, email, password: passwordHash });

    if (!user) {
      res
      .status(409)
      .json({ message: 'Esse email já está cadastrado.' });
    }

    res.status(201).json({ id: user.id, name: user.name, email: user.email })
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
    findEmail,
    createUser
  };
  