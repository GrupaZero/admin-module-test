import test from 'ava'
import Vue from 'vue'
import serviceProvider from '../index.js'
import Component from '../lib/components/SuperAdvancedFeature.vue';
 
test('foo', t => {
    t.pass()
})
 
test('bar', async t => {
    const bar = Promise.resolve('bar');
 
    t.is(await bar, 'bar')
})

test('renders', t => {
	const vm = new Vue(Component).$mount()
	const tree = {
		$el: vm.$el.outerHTML
	}
	t.snapshot(tree)
});