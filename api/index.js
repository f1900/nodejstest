// module.exports = (req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   };
import _ from 'lodash';
  export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write("aaaaaaaaaaaaaaaa\n");
    res.write("7");
    // res.end("wwwwwwwwwwwwwwwwwwwwww");
    res.end(String(_.add(1, 2)));
  }