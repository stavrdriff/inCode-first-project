(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function f(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=f(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const t={openSelector:"is-open",bodyBlocked:"is-blocked",modal:"modal",modalTrigger:'[data-action="modalTrigger"]',interactiveElements:"input, button, a, textarea, iframe, select",mobileMenu:"js-mobile-menu",mobileMenuTrigger:'[data-action="mobileMenuTrigger"]'};function s(){const o=document.querySelector(`.${t.mobileMenu}`),i=[...document.querySelectorAll(t.mobileMenuTrigger)],n=document.querySelector("body");!o||!i.length||i.forEach(l=>{l.addEventListener("click",()=>{o.classList.toggle(t.openSelector),n.classList.toggle(t.bodyBlocked),e(t.openSelector,t.mobileMenu)})})}function f(){const o=[...document.querySelectorAll(t.modalTrigger)];o.length&&o.forEach((i,n)=>{i.addEventListener("click",()=>{d(i,n,t.openSelector),e(t.openSelector,t.modal)})})}function d(o,i,n){const l=[...document.querySelectorAll(`.${t.modal}`)];if(!l.length)return;document.querySelector("body").classList.toggle(t.bodyBlocked),l.forEach((u,a)=>{u.classList.remove(n),a==i&&!o.closest(`.${n}`)&&u.classList.add(n)})}function e(o,i){const n=[...document.querySelectorAll(`.${i}`)];n.length&&n.forEach(l=>{const c=[...l.querySelectorAll(t.interactiveElements)],u=[...document.querySelectorAll(t.interactiveElements)];let a=[];u.forEach(m=>{m.closest(`.${i}`)||a.push(m)}),r(c,o,a)})}function r(o,i,n){o.forEach(l=>{l.closest(`.${i}`)?(l.setAttribute("tabindex","0"),n.forEach(c=>{c.setAttribute("tabindex","-1")})):(l.setAttribute("tabindex","-1"),n.forEach(c=>{c.setAttribute("tabindex","0")}))})}s(),f()});
//# sourceMappingURL=commonHelpers.js.map