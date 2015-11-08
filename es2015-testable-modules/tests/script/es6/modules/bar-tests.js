import $ from 'jquery';
import bar from 'modules/bar';

const original = $.fn.val;
const fakeMessage = 'A message from a fake jQuery method.';

const fake = () => fakeMessage;

QUnit.module('my example tests', {
	beforeEach() {
			$.fn.val = fake;
		},
		afterEach() {
			$.fn.val = original;
		}
});

QUnit.test('Can an imported jQuery module be mocked?', assert => {
	assert.equal(bar.getMessage(), fakeMessage);
});
