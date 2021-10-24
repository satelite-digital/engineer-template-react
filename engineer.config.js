module.exports =  () => {
  return {
    data: {
      message: 'hello world!',
    },
    templates: [
        {
          src: '.satelite/engineer/files/index.js',
          dest: 'src/index.js',
        },
      ],
  };
};
