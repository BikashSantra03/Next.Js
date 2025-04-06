// Dynamic Meta Data
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;
  return {
    title: `Game Id ${id}`,
    description: "Game page",
  };
};

const Game = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <div>Game ID {id}</div>;
};

export default Game;
