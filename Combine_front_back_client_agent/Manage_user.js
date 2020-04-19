const Queue= require("../Queue.js")
const agent = require("../Agent")
const chai = require("chai");
const list_of_queues = require("../create_queue_dict");
const all_agent= require("../AllAgents.js")

const assert = chai.assert;



let all_specialities_queues = list_of_queues.all_queues;
let finance_queue= all_specialities_queues['finance']
let HR_queue = all_specialities_queues["HR"]
let Agent_pool = new all_agent()


let user_1={ email: "Some1@email",
            name: "Some One",}
let user_2= { email: "Some2@email",
                name: "some two"}
let user_3= { email: "Some3@email",
                name:"some3 three"}
let user_4= { email: "Some4@email",
                name:"some4 three"}
let user_5= { email: "Some4@email",
                name:"some5 three"}
let user_6= { email: "Some4@email",
                name:"some6 three"}
// TEst for agent and all agent 


let Agent1= new agent("finance")
let Agent2= new agent("finance")
let Agent3= new agent("finance")

//Test with one speciality , finance 
describe('Empty Queue test', () => {
    it('Test an queue with 0 capacity ', () => {  

        assert.equal(finance_queue.emptyslots(), 0);// it is empty , but no slot available
        assert.isFalse(finance_queue.enqueue(user_1)) // cannot be enqueued 
        
    }) 
    it("Test all speciality "), function(){
        for(var queues in all_specialities_queues){
            
        assert.equal(queues.emptyslots(), 0);// it is empty , but no slot available
        assert.isFalse(queues.enqueue(user_1)) // cannot be enqueued 
        }
    }
})

// queue.enqueue(user_1)
// console.log("Empty slot "+queue.emptyslots())
// describe('enqueue1', () => {
//     it('check limit if it is reduced again', () => {

        
//         assert.equal(queue.emptyslots(), 9);
//     }) 
//     it('check size again ', () => {

       
//         assert.equal(queue.size(), 1);
//     }) 
//     it('check item inclusion   ', () => {

//         assert.include(queue.getallitem(), user_1);
//     })
    
// })

//  queue.enqueue(user_2)
//  console.log("Empty slot "+queue.emptyslots())
//  describe('enqueue2', () => {
//     it('check limit if it is reduced again ', () => {
//         assert.equal(queue.emptyslots(), 8);
//     }) 
//     it('check size again 3 ', () => {

       
//         assert.equal(queue.size(), 2);
//     }) 
//     it('check item inclusion of user2 ', () => {

//         assert.include(queue.getallitem(), user_2);
//     })
    
// })
// // console.log("Queue Empty slot before deque "+queue.emptyslots())
// // console.log("Queue Size" +queue.size())
// // console.log("Agent Capacity" +Agent2.check_capacity())
// Agent2.dequeue(queue)
// describe('dequeue ', () => {
//     it('check limit if it is increases again ', () => {

        
//         assert.equal(queue.emptyslots(), 9);
//     }) 
//     it('check size again ', () => {

       
//         assert.equal(queue.size(), 1);
//     }) 
//     it('Check agent Capacity  ', () => {

//         assert.equal(Agent2.check_capacity(),0)
//     })
    
// })
// // console.log("Agent Capacity" +Agent2.check_capacity())

// // console.log("Queue Empty slot after deque "+queue.emptyslots())
// // console.log("Queue Size" +queue.size())
// // console.log("Agent class Test")
//  Agent_pool.addAgent(Agent1)
//  Agent_pool.addAgent(Agent2)
//  describe('getMostavailable agent   ', () => {
//     it('get the most available agent   ', () => {

//     assert.equal(Agent_pool.getTheMostAvailableAgent("finance"), Agent1)
//     })
    
// })
// let available= Agent_pool.getTheMostAvailableAgent("finance")//get most available 
// console.log("The available capacity" + available.check_capacity())
// agent_repeat = Agent_pool.getOneAgent("finance", 1)

