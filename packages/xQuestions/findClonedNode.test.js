// *global window :true*/
import test from 'ava';
import {JSDOM} from 'jsdom';

import find from './findClonedNode';

test.before(() => {
  global.window = new JSDOM(`<!DOCTYPE html><body>
    <section role="main">
        <h1>My Peeps</h1>

        <div id="root-a">
            <div class="person">
                <h2 class="person__name">Peter</h2>

                <p class="person__age">Age: 20</p>
                <p class="person__hobbies">Hobbies: Guitar</p>
            </div>
        </div>

        <div id="root-b">
            <div class="person">
                <h2 class="person__name">Jonathan</h2>

                <p class="person__age">Age: 24</p>
                <p class="person__hobbies">Hobbies: Football</p>
            </div>
        </div>
    </body>`).window;
});

test.afterEach.always(() => global.window.stop());

test('find cloned node by position', (t) => {

  let A = global.window.document.querySelector('#root-a');
  let B = global.window.document.querySelector('#root-b');
  let x = global.window.document.querySelector('.person__hobbies');
  let y = B.querySelector('.person__hobbies');

  t.is(find(A, B, x), y);
});
