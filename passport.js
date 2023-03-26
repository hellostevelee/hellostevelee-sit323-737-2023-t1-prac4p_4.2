const jwt = require('jsonwebtoken');
const SECRET_KEY = 'MY-SECRET-KEY';

router.post('/login', (req, res, next) => {

  //nickname, image information.
  const nickname = "STEVE LEE";
  const profile = 'imageURL';

  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  token = jwt.sign({
    type: 'JWT',
    nickname: nickname,
    profile: profile
  }, SECRET_KEY, {
    expiresIn: '15m', // expired time: 15mins
    issuer: 'token provider',
  });

  //response
  return res.status(200).json({
    code: 200,
    message: 'created token',
    token: token
  });
});