!function(n){function e(t){if(o[t])return o[t].exports;var a=o[t]={exports:{},id:t,loaded:!1};return n[t].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var o={};return e.m=n,e.c=o,e.p="",e(0)}([function(n,e){$(document).ready(function(){console.log("in doc ready"),$("body").addClass("js");var n=$("#menu"),e=$(".menu-link"),o=$("nav a");e.click(function(){return console.log("in click menulink"),e.toggleClass("active"),n.toggleClass("active"),!1}),o.click(function(n){var e=$("nav a.active"),o=$(n.target);return console.log("in click navlink"),e.toggleClass("active"),o.toggleClass("active"),!1})})}]);