import { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

export function RadioAnswer(props) {
  const { id, q, /* respuestas, */ cantidad, onAnswerSelected } = props;
  const [selectedAnswer, setAnswerSelected] = useState("");

  const handleAnswerChange = (value) => {
    setAnswerSelected(value);
    onAnswerSelected(id, value);
  };


  return (
    <div className="my-8">
      <div className=" flex flex-row justify-between">
        <div className=" min-w-0 w-1/3">
          <h3 className="text-default">{`${id}. ${q}`}</h3>
        </div>
        <RadioGroup
          id={id}
          orientation="horizontal"
          size="sm"
          value={selectedAnswer}
          onValueChange={handleAnswerChange}
          isRequired={true}
          className="flex flex-row items-center min-w-32 "
        >
          {cantidad.map((cantidad) => (
            <Radio key={cantidad} value={cantidad} description={cantidad} className="flex flex-col-reverse gap-2 capitalize font-semibold"></Radio>
          ))}
        </RadioGroup>
      </div>
      <p className="text-default-500 text-small">
        Seleccionado: {selectedAnswer}
      </p>
    </div>
  );
}
