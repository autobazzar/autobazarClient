export default function Comment({ comment, user,score }) {
  return (
    <div className="flex flex-col border-b-[1px] py-2">
      <div className="flex flex-row gap-3">
        <h2 className="font-bold uppercase">{user.userName}</h2>
        <div className="flex flex-row gap-[1px]">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`pointer-events-none ${
                value > score ? "text-gray-400" : "text-yellow-400"
              }`}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <p className="font-light">{comment}</p>
    </div>
  );
}
