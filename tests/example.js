import test from 'ava'
import serviceProvider from '../index.js'
 
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