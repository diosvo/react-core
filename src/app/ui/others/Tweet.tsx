import { Heart, MessageCircleMore, Repeat2, Share } from 'lucide-react';

export default function Tweet() {
  return (
    <div className="bg-white border border-[#cfd9de] rounded-2xl flex gap-3 p-3">
      <div className="w-12 h-12">
        <img
          className="rounded-full w-[inherit]"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="Profile"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <span className="text-black font-bold">Dios Vo</span>
          <span className="text-gray-400 ml-1">
            <span>@diosvo</span>
            <span className="mx-1">&middot;</span>
            <span>Dec 12</span>
          </span>
        </div>
        <div className="text-[#0f1419] mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="flex justify-between text-gray-500 text-xs">
          {[
            {
              icon: MessageCircleMore,
              count: 1000,
            },
            {
              icon: Repeat2,
              count: 99,
            },
            {
              icon: Heart,
              count: 1,
            },
            {
              icon: Share,
              count: 1,
            },
          ].map(({ icon: Icon, count }, index) => (
            <div key={index} className="flex items-center gap-2">
              <Icon size={16} />
              <span>{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
