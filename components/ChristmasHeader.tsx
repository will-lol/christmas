interface ChristmasHeaderProps {
  name: string;
}

export default function ChristmasHeader(props: ChristmasHeaderProps) {
  return (
    <>
      <div class="py-12 flex items-center justify-center bg-red-600 relative">
        <h1 class="text-green-500 font-display text-[25rem]">Merry Christmas {props.name}</h1>
        <img class="w-64 bottom-2 right-1/4 absolute drop-shadow-xl" src="/api/randImage" alt="photo of me" />
      </div>
    </>
  );
}
