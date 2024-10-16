import express from 'express';
import passport from 'passport';
import {
  SignIn,
  SignUp,
  ForgetPassword,
  ResetPassword,
  changeUserPassword,
  changeUserDetails,
} from '../controllers/auth';
import { authenticateAuthToken } from '../middlewares/auth';

const router = express.Router();
//loginCheck function run before signIn user if user not signup
const loginCheck = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (!user) {
      req.error = info.error;
    } else req.user = user;
    next()
  })(req, res, next);
}

router.post('/signin', loginCheck, SignIn);
router.post('/signup', SignUp);
router.post('/forgetpassword', ForgetPassword);
router.put('/resetpassword', authenticateAuthToken, ResetPassword);
router.patch("/change-user-password", authenticateAuthToken, changeUserPassword);
router.patch("/change-user-details", authenticateAuthToken, changeUserDetails);

export default router;
