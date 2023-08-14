const validPassword = 'batatinha123';
const hashPassword = '$2a$10$7yexSQkqH0N2KtnIij76L.vF1a2h3zcT694g2TZVC2vRs1Rzhb/8G'; // hash do bcrypt para a senha 'batatinha123'

const loginWithHash = 
  {
    "id": 1,
    "username": "Hangar",
    "vocation": "Guerreiro",
    "level": 100,
    "password": hashPassword,
  }

  const loginWithoutUserName = 
  {
    "id": 1,
    "vocation": "Guerreiro",
    "level": 100,
    "password": hashPassword,
  }

  const userNotExists = {
    "id": 1,
    "username": "Fiona",
    "vocation": "Guerreira",
    "level": 1000,
    "password": "123456"

  }

  const userExist = {
    "username": "Hangar",
    "password": validPassword
  }

  export default {
    loginWithHash,
    loginWithoutUserName,
    userNotExists,
    userExist,
  }