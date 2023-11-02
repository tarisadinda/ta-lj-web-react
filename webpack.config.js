const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    devServer: {
      historyApiFallback: true,
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.(png|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]']
          },
          {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.(css|scss)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ]
    },
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/pages': path.resolve(__dirname, 'src/pages'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
        '@/assets': path.resolve(__dirname, 'src/assets'),
      },
    }
}