(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),c=n.n(r),o=n(12),i=n.n(o),s=(n(22),n(13)),u=n(4),d=n(5),l=n(8),b=n(7),j=(n(23),n(2)),v=n(3);function f(){var t=Object(j.a)(["\n\tmargin: 10px;\n\tpadding: 5px 10px;\n\tfont-size: 1.3em;\n"]);return f=function(){return t},t}var h=v.a.button(f()),p=function(t){var e=t.options,n=t.onLeaveFeedback,c=e.map((function(t){var e=Object.values(t),r=Object.keys(t);return Object(a.jsx)(h,{type:"button",value:r,onClick:n,children:e},r)}));return Object(a.jsx)(r.Fragment,{children:c})},g=function(t){var e=t.message;return Object(a.jsx)("p",{children:e})};g.defaultProps={message:""};var O=g;function x(){var t=Object(j.a)(["\n\tfont-size: 2em;\n"]);return x=function(){return t},t}var k=v.a.h2(x()),m=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)(k,{children:e}),n]})};m.defaultProps={title:""};var P=m;function F(){var t=Object(j.a)(["\n\tdisplay: block;\n\tmargin: 5px;\n\tfont-size: 1.5em;\n"]);return F=function(){return t},t}var C=v.a.span(F()),y=function(t){var e=t.good,n=t.neutral,r=t.bad,c=t.total,o=t.positivePercentage;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(C,{children:["Good: ",e]}),Object(a.jsxs)(C,{children:["Neutral: ",n]}),Object(a.jsxs)(C,{children:["Bad: ",r]}),Object(a.jsxs)(C,{children:["Total: ",c]}),Object(a.jsxs)(C,{children:["Positive feedback: ",o,"%"]})]})};y.defaultProps={neutral:0,good:0,bad:0,total:0,positivePercentage:0};var B=y,T=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).countTotalFeedback=function(){var e=t.props;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){return t.props.good>0?Math.round(100*t.props.good/t.countTotalFeedback()):0},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.good,n=t.neutral,r=t.bad,c=t.onBtnClick;return Object(a.jsxs)("div",{children:[Object(a.jsx)(P,{title:"Please leave feedback",children:Object(a.jsx)(p,{options:[{good:"Good"},{neutral:"Neutral"},{bad:"Bad"}],onLeaveFeedback:c})}),Object(a.jsx)(P,{title:"Statistics",children:this.countTotalFeedback()>0?Object(a.jsx)(B,{good:e,neutral:n,bad:r,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(a.jsx)(O,{message:"No feedback given"})})]})}}]),n}(r.Component);T.defaultProps={good:0,neutral:0,bad:0};var w=T,L=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onBtnClick=function(t){var e=t.target.value;a.setState((function(t){return Object(s.a)({},e,t[e]+1)}))},a.state={good:0,neutral:0,bad:0},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(w,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,onBtnClick:this.onBtnClick})})}}]),n}(r.Component),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),N()}},[[26,1,2]]]);
//# sourceMappingURL=main.fc5ccb77.chunk.js.map