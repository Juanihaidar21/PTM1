'use strict';

function BinarioADecimal(num) {
   return num.split("").reverse().reduce((c, x, i) => c + x * 2 ** i, 0);
}

function DecimalABinario(num) {
   return num > 0 ? `${DecimalABinario (~~(num / 2)) + (num % 2)}` : 0;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
