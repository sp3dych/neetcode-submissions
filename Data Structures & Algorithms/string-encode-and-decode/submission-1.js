class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (let s of strs) {
            res += s.length + "#" + s;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] != '#') {
                j += 1;
            }

            let length = parseInt(str.slice(i, j), 10);

            let start = j + 1;
            let end = start + length;

            res.push(str.slice(start, end));

            i = end;
        }

        return res;
    }
}
