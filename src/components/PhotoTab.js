export default function PhotoTab() {
  return (
    <div className="grid place-items-center block rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
      <div className="p-2">
        <h1 className="block text-3xl">{props.title}</h1>
        <img
          src="/location-pin.svg"
          width="25"
          height="25"
          className="inline-block m-1"
        />
        <h3 className="inline-block text-xl text-gray-600">{props.location}</h3>
      </div>
    </div>
  );
}

// photo tab: title, location icon + location, date, number of images,
// image + optional description - if more than one image, have show all button that opens a grid of images
