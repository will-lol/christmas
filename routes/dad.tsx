import ChristmasHeader from "../components/ChristmasHeader.tsx";
import Message from "../components/Message.tsx";
import GatedMessage from "../islands/GatedMessage.tsx";

export default function Home() {
  return (
    <body>
      <ChristmasHeader name="Dad"></ChristmasHeader>
      <div class="flex flex-col items-center">
        <Message>
          <p>
            Dearest Father. Is it you? Really? I don't believe it!
          </p>
          <p>
            There is only one possible way I may be able to find out who you truly are.
          </p>
          <p>
            I must conduct a test. Please see the question below. You must answer correctly. The stakes are high. Very high. Emily Warner. Don't give it away.
          </p>
        </Message>
        <GatedMessage
          question="What does 'TOK' stand for in the International Baccalauretate Diploma Programme"
          choices={["Tik Or Tok?", "Theory Of Knowledge", "Theory Of Kinematics", "Teaching Of Kinematics"]}
          correctAnswer={1}
          content={["Dear Dad,", "Merry Christmas. I admire you in many ways, one of which is your habitual nature. It is a source of calm and truly a guiding light that I found I missed dearly when you went away to Launceston. I always enjoy our discussions about Global Politics.", "Love,", "Will", "P.S: I found this peculiar letter lying around yesterday and thought it might interest you.","Dear Mr Bradshaw,","It is me, Mr Marmion. Today I was cleaning out my desk inbox and I discovered many letters from you concerning your children. I am deeply sorry I was unable to get back to you earlier. Since your sentiment toward your oldest, Nell can be synthesised as 'disappointment' and toward your youngest, Will, 'excitement', I find it simplist to only respond to this fact.","I whole heartedly agree.","Thanks, ", "Mr Marmion."]}
        >
        </GatedMessage>
      </div>
    </body>
  );
}
