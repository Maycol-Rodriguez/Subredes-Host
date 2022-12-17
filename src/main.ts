import './index.css';
import { masks } from './operaciones/mascaras';
import { vlsm } from './operaciones/vlsm';

const formulario = document.querySelector<HTMLFormElement>('#form');
const input = document.querySelector<HTMLInputElement>('#input-host');
const hidden = document.querySelector<HTMLElement>('#hidden');
const contentMask = document.querySelector<HTMLParagraphElement>('#mask');
const contentPrefix = document.querySelector<HTMLParagraphElement>('#prefix');
const contentAdd = document.querySelector<HTMLParagraphElement>('#onAdd');
const numberHost = document.querySelector<HTMLSpanElement>('#host');

formulario?.addEventListener('submit', (e) => {
  e.preventDefault();

  hidden!.style.display = 'flex';

  const resultVlsm: number = vlsm(Number(input!.value));
  const [mask, position, add] = masks(resultVlsm);

  numberHost!.textContent = input!.value;
  contentMask!.textContent = `${mask}`;
  contentAdd!.textContent = `+${position} ${add}`;
  contentPrefix!.textContent = `/${resultVlsm}`;

  vaciarInput(input!);
});

const vaciarInput = (nodo: HTMLInputElement) => {
  while (nodo.firstChild) {
    nodo.removeChild(nodo.firstChild);
  }
  nodo.focus();
};
