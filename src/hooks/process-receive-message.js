// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

module.exports = function() {
  return context => {
    const { data } = context;

    console.log('data=', data);

    // Best practice: hooks should always return the context
    return context;
  };
};
