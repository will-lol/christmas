import ChristmasHeader from "../components/ChristmasHeader.tsx";
import Message from "../components/Message.tsx";
import GatedMessage from "../islands/GatedMessage.tsx";

export default function Home() {
  return (
    <body>
      <ChristmasHeader name="Nell"></ChristmasHeader>
      <div class="flex flex-col items-center">
        <Message>
          <p>
            If your name is NOT Nell Bradshaw then this card isn't for you. If
            you read the Merry Christmas message earlier. Disregard it.
          </p>
          <p>
            Seriously. For Nell Bradshaw's eyes ONLY!
          </p>
          <p>
            I don't believe you. I'm going to have to conduct a test in order to
            discern if you are ACTUALLY the real Nell Bradshaw.
          </p>
        </Message>
        <GatedMessage
          question="Which of the following is spelt correctly?"
          choices={["Miniscule", "Minoscule", "Minuscule", "Minascule"]}
          correctAnswer={2}
          content={["Dearest Nell Bradshaw,","This Christmas message is unlike my former humerus endeavours. I would like to thank you for all the times we have shared throughout this year. I have thoroughly enjoyed our calls, conversations and mischeif. Despite the physical distance that would seem to divide our siblinghood, we have developed it. ","Love,","Will"]}
        >
        </GatedMessage>
      </div>
    </body>
  );
}
