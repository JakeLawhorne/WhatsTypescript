// Import stylesheets
import './style.css';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'


const form: HTMLFormElement = document.querySelector('#defineform')!;


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload
};