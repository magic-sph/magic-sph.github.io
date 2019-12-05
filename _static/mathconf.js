MathJax.Hub.Register.StartupHook("AsciiMath Jax Config",function () {
  var AM = MathJax.InputJax.AsciiMath.AM;
  AM.symbols.push(
    {input:"mathbf", tag:"mstyle", atname:"mathvariant", atval:"bold-italic",
     output:"mathbf", tex:null, ttype:AM.TOKEN.UNARY}
  );
});

MathJax.Hub.Config({
  TeX: {
    Macros: {
      vec: ['{\\mathbf{#1}}', 1]
    }
  }
});
