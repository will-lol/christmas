import { useState } from "preact/hooks";
import Message from "../components/Message.tsx";

interface GatedMessageProps {
  question: string;
  choices: Array<string>;
  correctAnswer: number;
  content: Array<string>;
}

export default function GatedMessage(props: GatedMessageProps) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [answer, setAnswer] = useState(-1);

  function handleClick(index: number) {
    setAnswer(index);
  }

  return (
    <>
      <div class="container flex flex-col items-center ">
          <h2 class="text-xl font-bold my-4 text-center">{props.question}</h2>
          {((answer != props.correctAnswer) && (answer != -1)) && <h2 class="text-red-800">Incorrect. Try again</h2>}
          {(answer == props.correctAnswer) && <h2 class="text-green-800">Correct! Message unlocked.</h2>}
        <div class="grid grid-cols-2">
          {props.choices.map((choice, index) => {
            return (
              <div
                onClick={() => handleClick(index)}
                class="px-8 py-6 bg-gray-100 border border-black m-2 text-xl rounded flex items-center justify-center cursor-pointer transition-transform hover:bg-gray-200 active:scale-95"
              >
                {choice}
              </div>
            );
          })}
        </div>
      </div>
      <Message>
        {answer == props.correctAnswer && props.content.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </Message>
    </>
  );
}
