function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const l=document.querySelector("button"),i=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function c(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o(`Fulfilled promise ${e} in ${t}ms`):r(`Rejected promise ${e} in ${t}ms`)}),t)}))}l.addEventListener("click",(t=>{t.preventDefault();let n=Number(i.value-a.value);console.log(n);for(let t=1;t<=d.value;t++)c(t,n+=Number(a.value)).then((t=>e(u).Notify.success(t))).catch((t=>e(u).Notify.failure(t)))}));
//# sourceMappingURL=03-promises.f0750119.js.map