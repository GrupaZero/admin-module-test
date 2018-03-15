import test from 'ava'
import Vue from 'vue'
import serviceProvider from '../index.js'
import Component from '../lib/components/Example.vue';
 
test('foo', t => {
    t.pass()
})
 
test('bar', async t => {
    const bar = Promise.resolve('bar');
 
    t.is(await bar, 'bar')
})

test('service provider', async t => {
    t.is(serviceProvider.register(), 'Registering Service Provider: Admin Module Test')
})

test('renders', t => {
	const vm = new Vue(Component).$mount()
	const tree = {
		$el: vm.$el.outerHTML
	}
	t.snapshot(tree)
});