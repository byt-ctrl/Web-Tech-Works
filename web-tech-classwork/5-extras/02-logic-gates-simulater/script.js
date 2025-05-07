const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');
const gate = document.getElementById('gate');
const output = document.getElementById('output');

function updateOutput() 
{
    const a = inputA.checked ? 1 : 0;
    const b = inputB.checked ? 1 : 0;
    const selectedGate = gate.value;
    let result = 0;

    switch (selectedGate) {
        case 'AND':
            result = a & b;
            break;
        case 'OR':
            result = a | b;
            break;
        case 'NOT':
            result = a ? 0 : 1;  // Only A is used for NOT
            break;
        case 'NAND':
            result = !(a & b) ? 1 : 0;
            break;
        case 'NOR':
            result = !(a | b) ? 1 : 0;
            break;
        case 'XOR':
            result = a ^ b;
            break;
        case 'XNOR':
            result = !(a ^ b) ? 1 : 0;
            break;
        default:
            result = 0;
    }

    output.textContent = result;
}

// Attach event listeners
inputA.addEventListener('change', updateOutput);
inputB.addEventListener('change', updateOutput);
gate.addEventListener('change', updateOutput);

updateOutput();
