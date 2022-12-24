import ChristmasHeader from "../components/ChristmasHeader.tsx";
import Message from "../components/Message.tsx";
import GatedMessage from "../islands/GatedMessage.tsx";

export default function Home() {
  return (
    <body>
      <ChristmasHeader name="Mum"></ChristmasHeader>
      <div class="flex flex-col items-center">
        <Message>
          <p>
            Will the real Warny please stand up.
          </p>
          <p>
            Nevermind, a quiz is better.
          </p>
          <p>
            Only Emily Warner could possibly answer the following:
          </p>
        </Message>
        <GatedMessage
          question="What sequence of events might one perform to move Netflix from their computer to the TV"
          choices={["Click the cast button on computer -> select TV -> Turn on TV -> Select input -> Select HDMI 1", "Click the cast button on computer -> select TV -> Turn on TV -> Select menu -> Select input -> Select HDMI 1", "Go into TV room -> wait", "Give up"]}
          correctAnswer={0}
          content={["Dear Mum,","Merry Christmas. I find myself striving to act like you in many situations where things might be uncertain or uneasy. You act in a sensible and friendly manner without exception. You never fail to brighten a dingy situation. ","Love,","Will"]}
        >
        </GatedMessage>
      </div>
    </body>
  );
}
