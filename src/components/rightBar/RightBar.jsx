import { FaBirthdayCake } from "react-icons/fa";
function RightBar() {
  return (
    <div className="w-4/12 p-4">
      {/**Birthdays */}
      <div className="flex gap-2">
        <FaBirthdayCake className="size-16 text-orange-700" />
        <span className="text-2xl">
          <b> Polar Foster</b> and <b> 3 others friends </b> have a birthday today.
        </span>
      </div>

      {/** Image */}
      <div className="py-8">
        <img src="/bday.jpg" alt="" className="h-[300px] w-[470px] rounded-lg" />
      </div>

      {/** Online Friends */}
      <div className="p-6">
        <h1 className="text-2xl font-bold pb-4">Online Friends</h1>
        <div className="flex gap-4">
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 items-center">
              <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />

              <span className="text-xl">John Deo</span>
            </li>

            <li className="flex gap-4 items-center">
              <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
              <span className="text-xl">John Deo</span>
            </li>

            <li className="flex gap-4 items-center">
              <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
              <span className="text-xl">John Deo</span>
            </li>

            <li className="flex gap-4 items-center">
              <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
              <span className="text-xl">John Deo</span>
            </li>

            <li className="flex gap-4 items-center">
              <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
              <span className="text-xl">John Deo</span>
            </li>

            <li className="flex gap-4 items-center">
              <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
              <span className="text-xl">John Deo</span>
            </li>

            <li className="flex gap-4 items-center">
              <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
              <span className="text-xl">John Deo</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
