/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var numa_t = [l1.val];
    var numb_t = [l2.val];
    var numa, numb;
    while ((l1 = l1.next) !== null) numa_t.push(l1.val);
    while ((l2 = l2.next) !== null) numb_t.push(l2.val);
    // console.log(numa);
    // console.log(numb);
    if (numa_t.length >= numb_t.length) {
        numa = numa_t;
        numb = numb_t;
    } else {
        numa = numb_t;
        numb = numa_t;
    }
    numa.push(0);
    for (var i = 0; i < numb.length; i++) {
        numa[i] += numb[i];
        if(numa[i] >= 10) {
            numa[i] -= 10;
            numa[i+1]++;
        }
    }
    for (i = numb.length; i < numa.length - 1; i++) {
        if (numa[i] >= 10) {
            numa[i] -= 10;
            numa[i+1] ++;
        }
    }
    var start = new ListNode();
    var node = start;
    var length = numa[numa.length - 1] === 0 ? numa.length - 1 : numa.length;
    for (i = 0; i < length; i++) {
        node.val = numa[i];
        if(i === length - 1) {
            node.next = null;
        } else {
            node.next = new ListNode();
            node = node.next;
        }
    }
    return start;
};