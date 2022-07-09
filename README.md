# antlrv4-js-xml

## 使用antlrv4的js api 解析xml

### 快速开始

```javascript
const antlrv4_js_xml = require('antlrv4-js-xml')

class Visitor extends antlrv4_js_xml.Visitor {
  visitElement (ctx) {
    console.log(ctx.Name()[0].getText())
    return this.visitChildren(ctx);
  }
}

xmlantlrv4_js_xml.transform('<div><span>2</span><p>1</p></div>', new Visitor())
```

### 浏览器中使用

```html
<script src="../dist/index-umd.js"></script>
<script>
  console.log(antlrv4_js_xml)
</script>
```

### 其他模块的支持

- [v] es
- [v] esm
- [v] umd

### API
```javascript
// Visit a parse tree produced by XMLParser#document.
visitDocument(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by XMLParser#prolog.
visitProlog(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by XMLParser#content.
visitContent(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by XMLParser#element.
visitElement(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by XMLParser#reference.
visitReference(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by XMLParser#attribute.
visitAttribute(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by XMLParser#chardata.
visitChardata(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by XMLParser#misc.
visitMisc(ctx) {
    return this.visitChildren(ctx);
}
```