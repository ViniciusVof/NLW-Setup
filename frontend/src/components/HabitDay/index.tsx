interface HabitProps {
  completed?: number;
}

export function HabitDay({ completed }: HabitProps) {
  return (
    <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg">
      {completed}
    </div>
    // <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex justify-center items-center">
    //   {completed}
    // </div>
  );
}
