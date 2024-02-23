import Alpine from "alpinejs";
window.Alpine = Alpine;
// Import Alpine from a module and into demo_app
// when where it will be bundled by Vite/RollUp

import { transform } from "enketo-transformer/web";
import { FSWatcher } from "vite";
const xformResponse = await fetch("/contactLog.xml");
const xform = await xformResponse.text();
const transformed = await transform({ xform });

// TODO: implement enketo-core in this toy example
// import { Form } from "enketo-core";
// const formEl = document.querySelector("form.or");
// const data = {  modelStr: result.model };

// const options = {};
// const form = new Form(formEl, data, {});
// let loadErrors = form.init();
// form.resetView();
// form = new Form(formSelector, { modelStr: modelStr }, {});

// Register component
Alpine.data("app", () => ({ payload: transformed }));

// rewrite to use AlpineJS
// import { Form } from "enketo-core";
// formStr = transformed.form;
// modelStr = transformed.model;
// const range = document.createRange();
// const formEl = range.createContextualFragment(formStr).querySelector("form");
// document.querySelector(".form-header").after(formEl);
// initializeForm();
// function initializeForm() {
//   const formEl = document.querySelector("form.or");
//   form = new Form(
//     formEl,
//     {
//       modelStr,
//     },
//     {
//       printRelevantOnly: false,
//     }
//   );
//   // for debugging
//   window.form = form;
//   // initialize form and check for load errors
//   const loadErrors = form
//     .init()
//     .filter((error) => error !== "Can't find last-saved.");

//   if (loadErrors.length > 0) {
//     window.alert(`loadErrors: ${loadErrors.join(", ")}`);
//   }
// }



// Start Alpine after components are registered, so that it recognizes components referenced on the page it is running
Alpine.start();

// Notes about Enketo-Transformer:
// The development of this project has a 10 year life.
// It was hoped ODK forms would be natively supported by browsers.
// That didn't happen. Enketo was created to transform XForms into HTML5 forms.
// Enketo-Transform was to do intensive processing on the backend in Node, and serve the results into a Redis cache.
// Enketo-Core was to run in the browser and render the output of Enketo-Transform, into the desired product.
// Starting in 2023, work began to consolidate the codebase into a monolithic repo that targets a Native DOM and Web APIs.

// There were deprecated/orphaned features, and this rewrite can be expected to create more.
// If you don't have a library of legacy forms you want to keep using, I wouldn't be too concerned.

// The goal of the rewrite is to simplify the transformation from XForm to web page. Make it faster, with the purpose of eliminating the need to cache.
//
// The JS bundle from Enketo-Transformer/Web is 1.2MB after a default Vite build because enketo-transform/web has a large portion devoted to labelling 9100+ language variants
