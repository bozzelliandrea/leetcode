/**
LeetCode: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
	let res = [s[0]];
	for (let i=1; i<s.length; i++) {
		if (s[i] === res[res.length-1]) res.pop();
		else res.push(s[i])
	}
	return res.join('');
};
