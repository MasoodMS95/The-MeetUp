const router = require('express').Router();
const { setTokenCookie, restoreUser, requireAuth  } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const groupsRouter = require('./groups.js');
const venueRouter = require('./venue.js')
const eventsRouter = require('./events.js')
const groupImageRouter = require('./group-images.js')
const eventImageRouter = require('./event-image.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/groups', groupsRouter);

router.use('/venues', venueRouter);

router.use('/events', eventsRouter);

router.use('/group-images', groupImageRouter);

router.use('/event-images', eventImageRouter);

router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);

  router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


module.exports = router;
