import PairTag from "./PairTag"
import SingleTag from "./SingleTag"

const t1 = new PairTag('div', { class: 'row' }, 'content');
console.log(t1.toString()); // <div class="row">content</div>
const t2 = new SingleTag('hr');
console.log(t2.toString()); // <hr>
