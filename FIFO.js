/**
 * Create a Class that represent s Queue.
 * A real life example of a Queue could be a line in a Coffee Shop
 *      Queue obey the "FIFO Rule "first in first out"
 *      At minimum, this class should have the Following methods:
 *          *add/enqueue
 *          *remove/dequeue
 *          *showNext/peek
 */   

function Queue() {    
    this.queue = [];
    this.add = function(value) {
        this.queue.push(value);
    }
    this.remove = function() {
        this.queue.shift()
    }
    this.showNext = function() {
        console.log(this.queue[0]);
    }
}
    
