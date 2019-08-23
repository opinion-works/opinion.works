module.exports = {
  tasks: {
    imagemin: true
  },
  assets: './assets',
  imagemin: {
    src: '_imgs',
    dest: 'imgs',
    jpeg: {
      progressive: true
    },
    png: {
      optimizationLevel: 7
    },
    gif: {
      interlaced: true,
    },
    svg: {
      plugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ]
    }
  }
};
