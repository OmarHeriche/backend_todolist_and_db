const Wrapper = (callBackFunction) => {
  return async (req, res, next) => {
    try {
      await callBackFunction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
module.exports = Wrapper;
