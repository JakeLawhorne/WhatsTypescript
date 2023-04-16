// Import stylesheets
// import './style.css';
// import 'node_modules/bootstrap/dist/css/bootstrap.min.css'


const form: HTMLFormElement = document.querySelector('#defineform')!;
const list: HTMLUListElement = document.querySelector('.list-unstyled')!;
const header: HTMLHeadingElement = document.querySelector('h1')!;

form.onsubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const text = formData.get('defineword') as string;

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${text}`);
    const data = await response.json();

    // update header
    header.innerText = text;

    // update list
    list.innerHTML = '';
    data[0].meanings.forEach((meaning: any) => {
      const li = document.createElement('li');
      li.innerText = `${meaning.partOfSpeech} - ${meaning.definitions[0].definition}`;
      list.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};