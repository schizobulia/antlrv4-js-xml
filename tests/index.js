const xml = require('../index.js')

class Visitor extends xml.Visitor {
  visitElement (ctx) {
    console.log(ctx.Name()[0].getText())
    return this.visitChildren(ctx);
  }
}

xml.transform('<div><span>2</span><p>1</p></div>', new Visitor())