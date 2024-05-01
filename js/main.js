import { form, handleForm } from './form.js';
import { updateView } from "./table.js";

form.addEventListener('submit', handleForm);

updateView();