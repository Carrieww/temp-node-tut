const EventEmitter = require("events");

const customEmitter = new EventEmitter(); // invoke it

// on: listen for an event
// emit: emit an event

// register for eventOne, which has callback function as the second argument
// can register multiple times for eventOne. When emitting it, the callback functions will be invoked consecutively.
// 注册多个的时候也可以一些有parameter，一些没有，每一个callback function都会从你eventName后面一个parameter开始读😂
customEmitter.on("eventOne", (a,b) => {
  console.log(`received a b ${a} ${b}`);
});
  
customEmitter.on("eventOne", () => {
    console.log(`data received`);
});
customEmitter.on("eventOne", (c) => {
    console.log(`received c ${c}`);
});

customEmitter.emit("eventOne",2,3,4);

// myEmitter.once('eventName', callback_function) can only be emitted once. 再多emit都没用
// myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`)); 有callback parameters则在emit时要写上parameters eg myEmitter.emit('status', 200, 'ok');
// unregister events: myEmitter.off('eventOne', c1); 此时再 emit 输出为 noop
// Getting Listener count: console.log(myEmitter.listenerCount('eventOne'));
// Getting Raw Listeners: console.log(myEmitter.rawListeners('eventOne'));
// More can be refered to link: https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/


