// module.exports = (req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   };

  export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  }