const Nightmare = require('nightmare')
const path = require('path')
const assert = require('assert')
var expect = require('chai').expect;
var clickByXpath = require('nightmare-xpath-event').clickByXpath;

describe('Load a Page', function() {
  this.timeout('10s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({
    	 webPreferences: {
    preload: path.resolve("C:/Nightmare-test/test/custom-script.js")
  		}
    })
  })

  
  describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

describe('Home page', () =>{
  	it('should verify the title', done => {
  		nightmare.goto('http://localhost:4200/?')
  		.evaluate(function(){
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function(title){
                expect(title).to.equal('\n  ToDo List\n')
                done();
  	})
            .catch(done)
  })
})

describe('Home page', () =>{
	it('should verify the count', done => {
		nightmare.goto('http://localhost:4200/?')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})



describe('Home page',() =>{
	it('should add an item to the list and verify the count',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('4')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should remove an item and verify the count',done =>{
		const completed = 'button.completed';
		nightmare.goto('http://localhost:4200/?')
		.click('.todoList li:first-child ' + completed)
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('2')
			done();
		})
		.catch(done)
	})
})

describe('Home page',() =>{
	it('should verify that the AddToDo box is empty after submitting',done =>{
		nightmare.goto('http://localhost:4200/?')
		.type('#newTodo','Random text')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#newTodo').textContent;
		})
		.end()
		.then(function(text){
			expect(text).to.equal('')
			done();
		})
		.catch(done)
 	})
})

describe('Home page',() =>{
	it('should make sure that we can not sumbit an empty String',done =>{
		nightmare.goto('http://localhost:4200/?')
		.click('#submit')
		.evaluate(function(){
			return document.querySelector('#count').textContent;
		})
		.end()
		.then(function(count){
			expect(count).to.equal('3')
			done();
		})
		.catch(done)
	})
})

})