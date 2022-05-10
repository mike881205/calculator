import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Display from "../Display";
import RowOne from "../Row1";
import RowTwo from "../Row2"
import RowThree from "../Row3"
import RowFour from "../Row4"
import RowFive from "../Row5"

const Calculator = () => {

    const [displayVal, setDisplay] = useState(0);
    const [inputA, setInputA] = useState(null);
    const [inputB, setInputB] = useState(null);
    const [operator, setOperator] = useState(null);

    const setVal = val => {
        console.log(`click: ${val}`)

        if (!operator && !inputA) {
            setInputA(val);
            setDisplay(val);
        };

        if (!operator && inputA) {
            setInputA(prevState => prevState + val)
            setDisplay(prevState => prevState + val);
        };

        if (operator && !inputB) {
            setInputB(val);
            setDisplay(val);
        };

        if (operator && inputB) {
            setInputB(prevState => prevState + val)
            setDisplay(prevState => prevState + val);
        };


    };

    const setOp = op => {
        console.log(`click: ${op}`)
        setOperator(op);
    };

    return (
        <Container style={{ height: '30vh', width: '20vw' }}>
            <Display
                displayVal={inputA ? displayVal : 0}
            />
            <RowOne
                setOp={setOp}
            />
            <RowTwo
                setters={{setVal, setOp}}
            />
            <RowThree
                setters={{setVal, setOp}}
            />
            <RowFour
                setters={{setVal, setOp}}
            />
            <RowFive
                setters={{setVal, setOp}}
            />
        </Container>
    );
};

export default Calculator;